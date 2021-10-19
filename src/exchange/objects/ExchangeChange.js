class ExchangeChange {
    _from;
    _to;

    constructor(data) {
        this._from = data.from;
        this._to = data.to;
    }

    get from() {
        return this._from;
    }

    get to() {
        return this._to;
    }
}

module.exports = ExchangeChange;
