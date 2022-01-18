module.exports = class Ticket {
    _id;
    _topic;
    _subject;
    _status;
    _date;

    get id() {
        return this._id;
    }
    get topic() {
        return this._topic;
    }
    get subject() {
        return this._subject;
    }
    get status() {
        return this._status;
    }
    get date() {
        return this._date;
    }
}
