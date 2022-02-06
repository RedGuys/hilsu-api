class TransfersCountResponse {
    _userId;
    _username;
    _count;

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