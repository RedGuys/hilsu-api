const TopUser = require("../Structures/TopUser");

class TopResponse {
    _users = [TopUser.prototype];

    get users() {
        return this._users;
    }
}

module.exports = TopResponse;