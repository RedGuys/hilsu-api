class Bid {
    _created_at;
    _user;
    _bid;

    constructor(data) {
        this._created_at = data.created_at;
        this._user = data.user;
        this._bid = data.bid;
    }


    get created_at() {
        return this._created_at;
    }

    get user() {
        return this._user;
    }

    get bid() {
        return this._bid;
    }
}

module.exports = Bid;