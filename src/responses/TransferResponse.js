class TransferResponse {
    _currency;
    _senderId;
    _senderName;
    _targetId;
    _targetName;
    _balance;

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