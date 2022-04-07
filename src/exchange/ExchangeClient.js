const ApiRequest = require("../ApiRequest");
const EventEmitter = require("events");
const WebSocket = require("ws");
const Settings = require("./objects/ExchangeSettings");
const Pool = require("./objects/ExchangePool");
const Rates = require("./objects/ExchangeRates");
const History = require("./objects/ExchangeHistory");
const Change = require("./objects/ExchangeChange");

class ExchangeClient extends EventEmitter {

    _token;
    _ws = WebSocket.prototype;
    _options = {inf_reconnect:true}

    _settings;
    _pool;
    _rates;
    _history;

    constructor(token, options = {}) {
        super();
        if(!options.inf_reconnect) options.inf_reconnect = true;
        this._options = options;
        this._token = token;
    }

    async connect() {
        let resp = await ApiRequest.requestMainGET("exchange/ws",{},{token:this._token});
        return new Promise((res, rej) => {
            let self = this;
            this._ws = new WebSocket(resp);
            this._ws.on("message",(data) => {this._workMessage(self,data)});
            this._ws.on("open", () => {
                this._ws.removeListener("error", onError);
                this._ws.removeListener("close", onError);
                res();
            });
            function onError() {
                rej();
            }
            this._ws.addEventListener("error", onError);
            this._ws.addEventListener("close", onError);
        });
    }

    async reconnect() {
        this._ws.close();
        let resp = await ApiRequest.requestMainGET("exchange/ws",{},{token:this._token});
        return new Promise((res, rej) => {
            let self = this;
            this._ws = new WebSocket(resp);
            this._ws.on("message",(data) => {this._workMessage(self,data)});
            this._ws.on("open", () => {
                this._ws.removeListener("error", onError);
                this._ws.removeListener("close", onError);
                res();
            });
            async function onError(e) {
                self.emit("disconnected", e);
                if (self._options.inf_reconnect) {
                    await self.reconnect();
                } else {
                    rej();
                }
            }
            this._ws.addEventListener("error", onError);
            this._ws.addEventListener("close", onError);
        });
    }

    change(from, to, amount) {
        return new Promise((res) => {
            this._ws.send(JSON.stringify({type:"exchange",value:{from,to,amount:(amount-this._settings.exchangeFee)}}));
            this.once("successChangeTech", (data) => {
                res(new Change(data));
            })
        });
    }

    get settings() {
        return this._settings;
    }

    get pool() {
        return this._pool;
    }

    get rates() {
        return this._rates;
    }

    get history() {
        return this._history;
    }

    _workMessage(self, message) {
        let obj = JSON.parse(message);
        switch (obj.type) {
            case "settings": {
                let settings = new Settings(obj.value);
                self._settings = settings;
                self.emit("settingsUpdate",settings);
                break;
            }
            case "pool": {
                let pool = new Pool(obj.value);
                let old = self._pool;
                self._pool = pool;
                self.emit("poolUpdate",pool,old);
                break;
            }
            case "rates": {
                let rates = new Rates(obj.value);
                let old = self._rates;
                self._rates = rates;
                self.emit("ratesUpdate",rates,old);
                break;
            }
            case "history": {
                let history = new History(obj.value);
                self._history = history;
                self.emit("historyUpdate",history);
                break;
            }
            case "meow": {
                self.emit("ping");
                break;
            }
            case "success": {
                self.emit("successChange",new Change(obj.value));
                self.emit("successChangeTech",obj.value);
                break;
            }
        }
    }
}

module.exports = ExchangeClient;