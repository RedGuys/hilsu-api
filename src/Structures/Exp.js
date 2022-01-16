module.exports = class exp {
    _id;
    _user_id;
    _exp;
    _level;
    _perks = [];
    _created_at;
    _updated_at;

    get id() {
        return this._id;
    }
    get user_id() {
        return this._user_id;
    }
    get exp() {
        return this._exp;
    }
    get level() {
        return this._level;
    }
    get perks() {
        return this._perks;
    }
    get created_at() {
        return this._created_at;
    }
    get updated_at() {
        return this._updated_at;
    }
}
