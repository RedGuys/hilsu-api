class Change {

    _date;
    _source;
    _description;
    _delta;

    get date() {
        return new Date(Date.parse(this._date));
    }

    get source() {
        return this._source;
    }

    get description() {
        return this._description;
    }

    get delta() {
        return this._delta;
    }
}

module.exports = Change;