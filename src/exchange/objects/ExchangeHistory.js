class ExchangeHistory {
    _current;
    _data;

    constructor(data) {
        this._current = data.current;
        this._data = data.data;
    }

    get current() {
        return this._current;
    }

    get data() {
        return this._data;
    }
}

module.exports = ExchangeHistory;