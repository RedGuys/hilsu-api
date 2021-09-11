const WebSocket = require("ws");
const EventEmitter = require("events");
const Message = require("./Structures/ChatMessage");
const MessageResult = require("./Structures/ChatMessageResult");

class ChatClient extends EventEmitter {

    _url;
    _ws = WebSocket.prototype;
    _chat;
    _rateLimit = false;

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

    sendMessage(text,options = {reply:undefined,acknowledgement:undefined}) {
        if(this._rateLimit) {
            this.emit("messageAcknowledged",new MessageResult({type:"ratelimit"}),options.acknowledgement);
            return;
        }
        this._rateLimit = true;
        setTimeout(()=>this._rateLimit = false,10000);
        let mes = {};
        mes.type = "sendMessage";
        mes.text = text;
        if(options.reply)
            mes.replyTo = options.reply;
        if(options.acknowledgement)
            mes.acknowledgement = options.acknowledgement;
        this._ws.send(JSON.stringify(mes));
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
                if(message.sender.isMe) return;
                client.emit("messageReceived",message);
                break;
            }
            case "messageAcknowledged": {
                client.emit("messageAcknowledged",new MessageResult(obj.result),obj.acknowledgement);
                break;
            }
        }
    }
}

module.exports = ChatClient;