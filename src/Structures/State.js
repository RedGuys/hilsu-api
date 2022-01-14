const BanServer = require("./BanServer");

module.exports = class State {
    _ban_server = BanServer.prototype;
    _score_w;
    _score_o;
    _bans_price;
    _can_recalculate;
    _days;
    _banned;

    get ban_server() {
        return this._ban_server;
    }
    get score_w() {
        return this._score_w;
    }
    get score_o() {
        return this._score_o;
    }
    get bans_price() {
        return this._bans_price;
    }
    get can_recalculate() {
        return this._can_recalculate;
    }
    get days() {
        return this._days;
    }
    get banned() {
        return this._banned;
    }
}
