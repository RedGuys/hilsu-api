class ShopDuration {
    _value;
    _format;

    constructor(data) {
        this._value = data.value;
        this._format = data.format;
    }

    get value() {
        return this._value;
    }

    get format() {
        return this._format;
    }
}

module.exports = ShopDuration;