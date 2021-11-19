const Buyer = require("../Structures/Buyer");
const Bid = require("../Structures/Bid");
const ApiRequest = require("../ApiRequest");

class AuctionItem {
    _id;
    _my;
    _user;
    _type;
    _item_name;
    _item_name_text;
    _item_hooks;
    _minetip;
    _item_amount;
    _item_sprite;
    _buyout_price;
    _bid_count;
    _sold_count;
    _hidden;
    _infinite;
    _extended;
    _expired;
    _expired_at;
    _expires_at;
    _shop_can_cancel;
    _shop_can_buy;
    _auc_can_buy;
    _auc_can_bid;
    _start_bid;
    _top_bid;
    _minimum_bid;
    _buyers;
    _bids;
    _top_bidder;
    _auc_bid_one;
    _auc_price_one;

    _auction;

     constructor(data, auction) {
         this._id = data.id;
         this._my = data.my;
         this._user = data.user;
         this._type = data.type;
         this._item_name = data.item_name;
         this._item_name_text = data.item_name_text;
         this._item_hooks = data.item_hooks;
         this._minetip = data.minetip;
         this._item_amount = data.item_amount
         this._item_sprite = data.item_sprite;
         this._buyout_price = data.buyout_price;
         this._bid_count = data.bid_count;
         this._sold_count = data.sold_count;
         this._hidden = data.hidden
         this._infinite = data.infinite;
         this._extended = data.extended;
         this._expired = data.expired;
         this._expired_at = data.expired_at;
         this._expires_at = data.expires_at;
         this._shop_can_cancel = data.shop_can_cancel;
         this._shop_can_buy = data.shop_can_buy;
         this._auc_can_buy = data.auc_can_buy;
         this._auc_can_bid = data.auc_can_bid;
         this._start_bid = data.start_bid;
         this._top_bid = data.top_bid;
         this._minimum_bid = data.minimum_bid;
         this._buyers = data.buyers.map(buy => new Buyer(buy));
         this._bids = data.bids.map(bid => new Bid(bid));
         this._top_bidder = data.top_bidder;
         this._auc_bid_one = data.auc_bid_one;
         this._auc_price_one = data.auc_price_one;

         this._auction = auction;
     }


    get id() {
        return this._id;
    }

    get my() {
        return this._my;
    }

    get user() {
        return this._user;
    }

    get type() {
        return this._type;
    }

    get item_name() {
        return this._item_name;
    }

    get item_name_text() {
        return this._item_name_text;
    }

    get item_hooks() {
        return this._item_hooks;
    }

    get minetip() {
        return this._minetip;
    }

    get item_amount() {
        return this._item_amount;
    }

    get item_sprite() {
        return this._item_sprite;
    }

    get buyout_price() {
        return this._buyout_price;
    }

    get bid_count() {
        return this._bid_count;
    }

    get sold_count() {
        return this._sold_count;
    }

    get hidden() {
        return this._hidden;
    }

    get infinite() {
        return this._infinite;
    }

    get extended() {
        return this._extended;
    }

    get expired() {
        return this._expired;
    }

    get expired_at() {
        return this._expired_at;
    }

    get expires_at() {
        return this._expires_at;
    }

    get shop_can_cancel() {
        return this._shop_can_cancel;
    }

    get shop_can_buy() {
        return this._shop_can_buy;
    }

    get auc_can_buy() {
        return this._auc_can_buy;
    }

    get auc_can_bid() {
        return this._auc_can_bid;
    }

    get start_bid() {
        return this._start_bid;
    }

    get top_bid() {
        return this._top_bid;
    }

    get minimum_bid() {
        return this._minimum_bid;
    }

    get buyers() {
        return this._buyers;
    }

    get bids() {
        return this._bids;
    }

    get top_bidder() {
        return this._top_bidder;
    }

    get auc_bid_one() {
        return this._auc_bid_one;
    }

    get auc_price_one() {
        return this._auc_price_one;
    }

    async buy(amount = 1) {
        if (amount > this._item_amount) amount = this._item_amount;
        let data = {amount, id: this._id};
        await ApiRequest.requestMainPOST(this._auction._path + "buy", {}, JSON.stringify(data), {token: this._auction._client._token});
    }

    async bid(bid) {
        if (this.minimum_bid > bid) bid = this.minimum_bid;
        let data = {bid, id: this._id};
        await ApiRequest.requestMainPOST(this._auction._path + "buy", {}, JSON.stringify(data), {token: this._auction._client._token});
    }

    async buyout() {
        let data = {buyout:true, id: this._id};
        await ApiRequest.requestMainPOST(this._auction._path + "buy", {}, JSON.stringify(data), {token: this._auction._client._token});
    }
}

module.exports = AuctionItem;