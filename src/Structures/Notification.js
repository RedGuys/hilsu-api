module.exports = class Notification {
    _date;
    _flags;
    _id;
    _text;

    get date() {
        return this._date;
    }

    get flags() {
        return this._flags;
    }

    get id() {
        return this._id;
    }

    get text() {
        return this._text;
    }
}