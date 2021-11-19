const AuctionDuration = require("../Structures/AuctionDuration");
const Item = require("../Structures/Item");
const ShopDuration = require("../Structures/ShopDuration");

class ItemsResponse {
    _auc_durations;
    _duration_extended;
    _forbidden_sale;
    _infinite;
    _items;
    _reset_auc_duration;
    _shop_durations;
    _ws_slot_count;

    constructor(data, auction) {
        this._auc_durations = data.auc_durations.map(dur => new AuctionDuration(dur));
        this._duration_extended = data.duration_extended;
        this._forbidden_sale = data.forbidden_sale;
        this._infinite = data.infinite;
        this._items = data.items.map(item => new Item(item,auction));
        this._reset_auc_duration = data.reset_auc_duration;
        this._shop_durations = data.shop_durations.map(dur => new ShopDuration(dur));
        this._ws_slot_count = data.ws_slot_count;
    }

    get auc_durations() {
        return this._auc_durations;
    }

    get duration_extended() {
        return this._duration_extended;
    }

    get forbidden_sale() {
        return this._forbidden_sale;
    }

    get infinite() {
        return this._infinite;
    }

    get items() {
        return this._items;
    }

    get reset_auc_duration() {
        return this._reset_auc_duration;
    }

    get shop_durations() {
        return this._shop_durations;
    }

    get ws_slot_count() {
        return this._ws_slot_count;
    }
}

module.exports = ItemsResponse;