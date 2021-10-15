class TransferResponse {
    _currency;
    _senderId;
    _senderName;
    _targetId;
    _targetName;
    _balance;

    constructor(data) {
        this._currency = data.currency;
        this._senderId = data.senderId;
        this._senderName = data.senderName;
        this._targetId = data.targetId;
        this._targetName = data.targetName;
        this._balance = data.balance;
    }

    get currency() {
        return this._currency;
    }

    get senderId() {
        return this._senderId;
    }

    get senderName() {
        return this._senderName;
    }

    get targetId() {
        return this._targetId;
    }

    get targetName() {
        return this._targetName;
    }

    get balance() {
        return this._balance;
    }
}

module.exports = TransferResponse;