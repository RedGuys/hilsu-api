class SellFee {
    _fee;
    _nofee;

    constructor(data) {
        this._fee = data.fee;
        this._nofee = data.nofee;
    }

    get fee() {
        return Number.parseInt(this._fee.split(" ")[0]);
    }

    get formattedFee() {
        return this._fee;
    }

    get nofee() {
        return this._nofee;
    }
}

module.exports = SellFee;