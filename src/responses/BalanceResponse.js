const User = require("../Structures/User");
const Balance = require("../Structures/UserBalances");

class BalanceResponse {
    _user;
    _balance;

    constructor(data) {
        this._user = new User(data.user);
        this._balance = new Balance(data.balance);
    }

    get user() {
        return this._user;
    }

    get balance() {
        return this._balance;
    }
}

module.exports = BalanceResponse;