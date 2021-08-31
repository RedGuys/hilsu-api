const WebSocket = require("ws");
const EventEmitter = require("events");
const Message = require("./Structures/ChatMessage");

class ChatClient extends EventEmitter {

    _url;
    _ws = WebSocket.prototype;
    _chat;

    constructor(chat = "talk",token = "") {
        super();
        this._chat = chat;
        this._url = `wss://api.hil.su/v2/chat/${chat}/socket`+ (token !== "" ? "?accessToken="+token : "");
        this.connect();
    }

    connect() {
        let client = this;
        this._ws = new WebSocket(this._url);
        this._ws.on("open", () => {this.emit("open")});
        this._ws.on("message",(data) => {this._workMessage(client,data)});
    }


    _workMessage(client, data) {
        let obj = JSON.parse(data);
        switch (obj.type) {
            case "keepAlive": {
                client._ws.send(JSON.stringify({type: "keepAlive"}));
                client.emit("keepAlive");
                break;
            }
            case "messageReceived": {
                let message = new Message(obj.message, this._chat);
                if(message.isDeleted) {
                    client.emit("messageDeleted",message);
                    break;
                }
                if(obj.isEdited) {
                    client.emit("messageEdited",message);
                    break
                }
                client.emit("messageReceived",message);
                break;
            }
        }
    }
}

module.exports = ChatClient;