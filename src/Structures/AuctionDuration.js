class AuctionDuration {
    _value;
    _format;
    _reset;

    constructor(data) {
        this._value = data.value;
        this._format = data.format;
        this._reset = data.reset;
    }


    get value() {
        return this._value;
    }

    get format() {
        return this._format;
    }

    get reset() {
        return this._reset;
    }
}

module.exports = AuctionDuration;