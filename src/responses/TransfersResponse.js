const Transfer = require("../Structures/Transfer");

class TransfersResponse {
    _userId;
    _username;
    _transfers = [Transfer.prototype];

    get userId() {
        return this._userId;
    }

    get username() {
        return this._username;
    }

    get transfers() {
        return this._transfers;
    }
}

module.exports = TransfersResponse;