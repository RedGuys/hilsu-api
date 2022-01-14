module.exports = class Type {
    _id;
    _user_id;
    _ban_rule_id;
    _ban_server_id;
    _flags;
    _comment;
    _created_at;
    _updated_at;
    _admin_id;
    _files = {};

    get id() {
        return this._id;
    }
    get user_id() {
        return this._user_id;
    }
    get ban_rule_id() {
        return this._ban_rule_id;
    }
    get ban_server_id() {
        return this._ban_server_id;
    }
    get flags() {
        return this._flags;
    }
    get comment() {
        return this._comment;
    }
    get created_at() {
        return this._created_at;
    }
    get updated_at() {
        return this._updated_at;
    }
    get admin_id() {
        return this._admin_id;
    }
    get files() {
        return this._files;
    }
}
