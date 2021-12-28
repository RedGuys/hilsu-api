module.exports = class Transaction {
    _id;
    _date;
    _time;
    _change;
    _description;

    get id() {
        return this._id;
    }
    get date() {
        return this._date;
    }
    get time() {
        return this._time;
    }
    get change() {
        return this._change;
    }
    get description() {
        return this._description;
    }
}
