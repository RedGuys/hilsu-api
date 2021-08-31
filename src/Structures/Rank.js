class Rank {
    _code;
    _title;

    constructor(data) {
        this._code = data.code;
        this._title = data.title;
    }

    get code() {
        return this._code;
    }

    get title() {
        return this._title;
    }
}

module.exports = Rank;