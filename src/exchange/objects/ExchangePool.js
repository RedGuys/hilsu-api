class ExchangePool {
    _balance;
    _gems;
    _money;

    constructor(data) {
        this._balance = data.balance;
        this._gems = data.gems;
        this._money = data.money;
    }


    get balance() {
        return this._balance;
    }

    get gems() {
        return this._gems;
    }

    get money() {
        return this._money;
    }
}

module.exports = ExchangePool;