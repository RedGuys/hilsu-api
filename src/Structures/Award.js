const Rank = require("./ExpRank");

module.exports = class awards {
    _has_billing;
    _given;
    _ranks = [Rank.prototype];
    _rank_period;
    _balance = {};

    get has_billing() {
        return this._has_billing;
    }
    get given() {
        return this._given;
    }
    get ranks() {
        return this._ranks;
    }
    get rank_period() {
        return this._rank_period;
    }
    get balance() {
        return this._balance;
    }
}
