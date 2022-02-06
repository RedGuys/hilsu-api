const User = require("../Structures/User");
const Balance = require("../Structures/UserBalances");

class BalanceResponse {
    _user = User.prototype;
    _balances = Balance.prototype;

    get user() {
        return this._user;
    }

    get balances() {
        return this._balances;
    }
}

module.exports = BalanceResponse;