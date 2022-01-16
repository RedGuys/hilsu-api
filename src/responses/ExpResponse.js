const exp = require("../Structures/Exp");
const awards = require("../Structures/Award");

module.exports = class Main {
    _exp = exp.prototype;
    _required_exp;
    _referrer = {};
    _awards = awards.prototype;

    get exp() {
        return this._exp;
    }
    get required_exp() {
        return this._required_exp;
    }
    get referrer() {
        return this._referrer;
    }
    get awards() {
        return this._awards;
    }
}
