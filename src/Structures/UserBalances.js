class UserBalances {

    _coins;
    _gems;

    constructor(data) {
        this._coins = data.coins;
        this._gems = data.gems;
    }

    get coins() {
        return this._coins;
    }

    get gems() {
        return this._gems;
    }
}

module.exports = UserBalances;