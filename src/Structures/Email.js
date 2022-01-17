module.exports = class Email {
    _title;
    _value;
    _confirmed;
    _can_send;

    get title() {
        return this._title;
    }
    get value() {
        return this._value;
    }
    get confirmed() {
        return this._confirmed;
    }
    get can_send() {
        return this._can_send;
    }
}
