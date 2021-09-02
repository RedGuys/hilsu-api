class ChatMessageResult {
    _type;
    _id;
    _muter;
    _expiresAt;

    constructor(data) {
        this._type = data.type;
        this._id = data.id;
        this._muter = data.muter;
        this._expiresAt = data.expiresAt;
    }

    get type() {
        return this._type;
    }

    get id() {
        return this._id;
    }

    get muter() {
        return this._muter;
    }

    get expiresAt() {
        return this._expiresAt;
    }
}

module.exports = ChatMessageResult;