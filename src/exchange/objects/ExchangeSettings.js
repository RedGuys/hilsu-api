class ExchangeSettings {
    _exchangeFee;
    _maxExchange;

    constructor(data) {
        this._exchangeFee = data.exchangeFee;
        this._maxExchange = data.maxExchange;
    }

    get maxExchange() {
        return this._maxExchange;
    }

    get exchangeFee() {
        return this._exchangeFee;
    }
}

module.exports = ExchangeSettings;