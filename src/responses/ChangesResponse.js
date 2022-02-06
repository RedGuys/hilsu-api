const Change = require("../Structures/Change");

class ChangesResponse {
    _userId;
    _username;
    _changes = [Change.prototype];

    get userId() {
        return this._userId;
    }

    get username() {
        return this._username;
    }

    get changes() {
        return this._changes;
    }
}

module.exports = ChangesResponse;