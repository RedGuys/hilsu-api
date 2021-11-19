class Mod {
    _choosed;
    _id;
    _item_count;
    _name;

    constructor(data) {
        this._chosen = data.ch;
        this._id = data.id;
        this._item_count = data.item_count;
        this._name = data.name;
    }


    get chosen() {
        return this._chosen;
    }

    get id() {
        return this._id;
    }

    get item_count() {
        return this._item_count;
    }

    get name() {
        return this._name;
    }
}

module.exports = Mod;