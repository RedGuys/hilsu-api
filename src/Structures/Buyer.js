class Buyer {
    _to_user;
    _quantity;
    _price;
    _created_at;

    constructor(data) {
        this._to_user = data.to_user;
        this._quantity = data.quantity;
        this._price = data.price;
        this._created_at = data.created_at;
    }


    get to_user() {
        return this._to_user;
    }

    get quantity() {
        return this._quantity;
    }

    get price() {
        return this._price;
    }

    get created_at() {
        return this._created_at;
    }
}

module.exports = Buyer;