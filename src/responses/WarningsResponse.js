const Entry = require("../Structures/WarnEntry");
const State = require("../Structures/State");

module.exports = class Main {
    _entries = [Entry.prototype];
    _states = [State.prototype];
    _ban_threshold;

    get entries() {
        return this._entries;
    }
    get states() {
        return this._states;
    }
    get ban_threshold() {
        return this._ban_threshold;
    }
}
