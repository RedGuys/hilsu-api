const PlayersList = require("./PlayersList");

module.exports = class MonitoringServer {
    _title;
    _players;
    _players_list = [PlayersList.prototype];
    _slots;
    _game_version;
    _custom_status;

    get title() {
        return this._title;
    }
    get players() {
        return this._players;
    }
    get players_list() {
        return this._players_list;
    }
    get slots() {
        return this._slots;
    }
    get game_version() {
        return this._game_version;
    }
    get custom_status() {
        return this._custom_status;
    }
}
