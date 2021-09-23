const Change = require("../Structures/Change");

class ChangesResponse {
    _userId;
    _username;
    _changes;

    constructor(data) {
        this._userId = data.userId;
        this._username = data.username;
        let changes = [];
        for (let change of data.changes) {
            changes.push(new Change(change));
        }
        this._changes = changes;
    }

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