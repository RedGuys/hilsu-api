const Transaction = require("../Structures/Transaction");

module.exports = class TransactionsResponse {
    _transactions = [Transaction.prototype];
    _totalPageCount;
    _perPage;

    get transactions() {
        return this._transactions;
    }
    get totalPageCount() {
        return this._totalPageCount;
    }
    get perPage() {
        return this._perPage;
    }
}
