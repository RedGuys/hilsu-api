const TopUser = require("../Structures/TopUser");

class TopResponse {
    _users = [];

    constructor(data) {
        for (let user of data.users) {
            this._users.push(new TopUser(user));
        }
    }

    get users() {
        return this._users;
    }
}

module.exports = TopResponse;