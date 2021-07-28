const User = require("./User");

class TopUser {

    _num;
    _user;
    _balance;

    constructor(data) {
        this._num = data.num;
        this._user = new User(data.user);
        this._balance = data.balance;
    }

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