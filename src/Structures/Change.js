class Change {

    _date;
    _source;
    _description;
    _delta;

    constructor(data) {
        this._date = new Date(Date.parse(data.date));
        this._source = data.source;
        this._description = data.description;
        this._delta = data.delta;
    }

    get date() {
        return this._date;
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