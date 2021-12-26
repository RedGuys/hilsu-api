const Notification = require("./Notification");

class UserNotifications {
    _count;
    _perPage;
    _notifications = [Notification.prototype]
    _totalPageCount;

    get count() {
        return this._count;
    }

    get perPage() {
        return this._perPage;
    }

    get notifications() {
        return this._notifications;
    }

    get totalPageCount() {
        return this._totalPageCount;
    }
}

module.exports = UserNotifications;