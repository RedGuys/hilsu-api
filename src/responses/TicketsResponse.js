const Ticket = require("../Structures/Ticket");

module.exports = class Main {
    _tickets = [Ticket.prototype];
    _totalPageCount;
    _perPage;

    get tickets() {
        return this._tickets;
    }
    get totalPageCount() {
        return this._totalPageCount;
    }
    get perPage() {
        return this._perPage;
    }
}
