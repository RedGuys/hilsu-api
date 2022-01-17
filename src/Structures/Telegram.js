module.exports = class Telegram {
    _title;
    _value = {};
    _url = {};
    _name;

    get title() {
        return this._title;
    }
    get value() {
        return this._value;
    }
    get url() {
        return this._url;
    }
    get name() {
        return this._name;
    }
}
