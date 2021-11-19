const AuctionItem = require("../Structures/AuctionItem");
const Mod = require("../Structures/Mod");

class ListResponse {
    _auc;
    _filters;
    _filters_dump;
    _filters_tags;
    _mods;
    _perPage;
    _totalPageCount;

    constructor(data, auction) {
        this._auc = data.auc.map(item => new AuctionItem(item, auction));
        this._filters = data.filters;
        this._filters_dump = data.filters_dump;
        this._filters_tags = data.filters_tags;
        this._mods = data.mods.map(mod => new Mod(mod));
        this._perPage = data.perPage;
        this._totalPageCount = data.totalPageCount;
    }


    get auc() {
        return this._auc;
    }

    get filters() {
        return this._filters;
    }

    get filters_dump() {
        return this._filters_dump;
    }

    get filters_tags() {
        return this._filters_tags;
    }

    get mods() {
        return this._mods;
    }

    get perPage() {
        return this._perPage;
    }

    get totalPageCount() {
        return this._totalPageCount;
    }
}

module.exports = ListResponse;