const ChatUser = require("./ChatUser");
const Attachment = require("./ChatAttachment");

class ChatMessage {
    _id;
    _telegramId;
    _sender;
    _replyTo;
    _replyToMessage;
    _text;
    _forwardedFrom;
    _attachments;
    _createdAt;
    _editedAt;
    _isDeleted;

    constructor(data, chat) {
        this._id = data.id;
        this._telegramId = data.telegramId;
        this._sender = new ChatUser(data.sender);
        this._replyTo = data.replyTo;
        this._replyToMessage = data.replyToMessage !== undefined ? new ChatMessage(data.replyToMessage, chat):undefined;
        this._text = data.text;
        this._forwardedFrom = data.forwardedFrom !== undefined ? new ChatUser(data.forwardedFrom):undefined;
        this._attachments = [];
        for (let x of data.attachments) {
            this._attachments.push(new Attachment(x, chat));
        }
        this._createdAt = data.createdAt;
        this._editedAt = data.editedAt;
        this._isDeleted = data.isDeleted;
    }

    get id() {
        return this._id;
    }

    get telegramId() {
        return this._telegramId;
    }

    get sender() {
        return this._sender;
    }

    get replyTo() {
        return this._replyTo;
    }

    get replyToMessage() {
        return this._replyToMessage;
    }

    get text() {
        return this._text;
    }

    get forwardedFrom() {
        return this._forwardedFrom;
    }

    get attachments() {
        return this._attachments;
    }

    get createdAt() {
        return this._createdAt;
    }

    get editedAt() {
        return this._editedAt;
    }

    get isDeleted() {
        return this._isDeleted;
    }
}

module.exports = ChatMessage;