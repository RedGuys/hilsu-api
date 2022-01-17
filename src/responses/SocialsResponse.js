const accounts = require("../Structures/Accounts");

module.exports = class Main {
    _accounts = accounts.prototype;
    _pass;

    get accounts() {
        return this._accounts;
    }
    get pass() {
        return this._pass;
    }
}
