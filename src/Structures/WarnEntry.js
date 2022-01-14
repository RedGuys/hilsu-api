const Type = require("./Type");

module.exports = class WarnEntry {
    _id;
    _ban_server;
    _date;
    _w;
    _admin;
    _rule_index;
    _rule_text;
    _soft_remove;
    _comment;
    _type = Type.prototype;

    get id() {
        return this._id;
    }
    get ban_server() {
        return this._ban_server;
    }
    get date() {
        return this._date;
    }
    get w() {
        return this._w;
    }
    get admin() {
        return this._admin;
    }
    get rule_index() {
        return this._rule_index;
    }
    get rule_text() {
        return this._rule_text;
    }
    get soft_remove() {
        return this._soft_remove;
    }
    get comment() {
        return this._comment;
    }
    get type() {
        return this._type;
    }
}
