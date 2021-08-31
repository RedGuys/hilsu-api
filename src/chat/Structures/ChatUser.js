const Rank = require("../../Structures/Rank");
const ChatExternalUser = require("./ChatExternalUser");

class ChatUser {
    _type;
    _id;
    _uuid;
    _username;
    _rank;
    _isMe;
    _external;
    _firstName;
    _lastName;
    _name;
    _app;
    _appName;
    _externalId;

    constructor(data) {
        this._type = data.type;
        this._id = data.id;
        this._uuid = data.uuid;
        this._username = data.username;
        this._rank = new Rank(data.rank);
        this._isMe = data.isMe;
        this._external = data.external !== undefined ? new ChatExternalUser(data.external):undefined;
        this._firstName = data.firstName;
        this._lastName = data.lastName;
        this._name = data.name;
        this._app = data.app;
        this._appName = data.appName;
        this._externalId = data.externalId;
    }

    get type() {
        return this._type;
    }

    get id() {
        return this._id;
    }

    get uuid() {
        return this._uuid;
    }

    get username() {
        return this._username;
    }

    get rank() {
        return this._rank;
    }

    get isMe() {
        return this._isMe;
    }

    get external() {
        return this._external;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get name() {
        return this._name;
    }

    get app() {
        return this._app;
    }

    get appName() {
        return this._appName;
    }

    get externalId() {
        return this._externalId;
    }
}

module.exports = ChatUser;