const UserNotifications = require("../Structures/UserNotifications");
const UserSkin = require("../Structures/UserSkin");
const Stats = require("../Structures/Stats");

class UserInfoResponse {
    _first_name;
    _is_birthday;
    _notifications = UserNotifications.prototype;
    _skin = UserSkin.prototype;
    _stats = Stats.prototype;

    get first_name() {
        return this._first_name;
    }

    get is_birthday() {
        return this._is_birthday;
    }

    get notifications() {
        return this._notifications;
    }

    get skin() {
        return this._skin;
    }

    get stats() {
        return this._stats;
    }
}

module.exports = UserInfoResponse;