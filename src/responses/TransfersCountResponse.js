class TransfersCountResponse {
    _userId;
    _username;
    _count;

    constructor(data) {
        this._userId = data.userId;
        this._username = data.username;
        this._count = data.count;
    }

    get userId() {
        return this._userId;
    }

    get username() {
        return this._username;
    }

    get count() {
        return this._count;
    }
}

module.exports = TransfersCountResponse;