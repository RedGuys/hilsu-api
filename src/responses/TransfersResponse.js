const Transfer = require("../Structures/Transfer");

class TransfersResponse {
    private _userId;
    private _username;
    private _transfers;

    constructor(data) {
        this._userId = data.userId;
        this._username = data.username;
        let transfers = [];
        for (let transfer of data.transfers) {
            transfers.push(new Transfer(transfer));
        }
        this._changes = transfers;
    }

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