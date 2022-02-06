const User = require("./User");

class TopUser {

    _num;
    _user = User.prototype;
    _balance;

    get num() {
        return this._num;
    }

    get user() {
        return this._user;
    }

    get balance() {
        return this._balance;
    }
}

module.exports = TopUser;