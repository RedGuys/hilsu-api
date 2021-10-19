class ExchangeRates {
    _maxExchange;
    _rates;

    constructor(data) {
        this._maxExchange = data.maxExchange;
        this._rates = data.rates;
    }

    get maxExchange() {
        return this._maxExchange;
    }

    get rates() {
        return this._rates;
    }
}

module.exports = ExchangeRates;