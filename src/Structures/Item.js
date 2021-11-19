const ApiRequest = require("../ApiRequest");
const SellFee = require("../Structures/SellFee");

class Item {
    _id;
    _item_hooks;
    _item_name;
    _item_name_text;
    _item_amount;
    _item_sprite;
    _forbidden_for_sale;
    _minetip;

    _auction;

    constructor(data, auction) {
        this._id = data.id;
        this._item_hooks = data.item_hooks;
        this._item_name = data.item_name;
        this._item_name_text = data.item_name_text;
        this._item_amount = data.item_amount;
        this._item_sprite = data.item_sprite;
        this._forbidden_for_sale = data.forbidden_for_sale;
        this._minetip = data.minetip;

        this._auction = auction;
    }

    get id() {
        return this._id;
    }

    get item_hooks() {
        return this._item_hooks;
    }

    get item_name() {
        return this._item_name;
    }

    get item_name_text() {
        return this._item_name_text;
    }

    get item_amount() {
        return this._item_amount;
    }

    get item_sprite() {
        return this._item_sprite;
    }

    get forbidden_for_sale() {
        return this._forbidden_for_sale;
    }

    get minetip() {
        return this._minetip;
    }

    async sellShopFee(price, amount = 1, duration = 1, hidden = false) {
        if (amount > this._item_amount) amount = this._item_amount;
        let data = {amount, shopDuration: duration, hidden, id: this._id, price, type:"shop"};
        let response = await ApiRequest.requestMainPOST(this._auction._path + "sell/fee", {}, JSON.stringify(data), {token: this._auction._client._token});
        return new SellFee(response);
    }

    async sellAucFee(buyoutPrice, startBid, amount = 1, duration = 1, hidden = false) {
        if (amount > this._item_amount) amount = this._item_amount;
        let data = {amount, aucDuration: duration, hidden, id: this._id, buyoutPriceUnit:buyoutPrice, startBid, type:"auc"};
        let response = await ApiRequest.requestMainPOST(this._auction._path + "sell/fee", {}, JSON.stringify(data), {token: this._auction._client._token});
        return new SellFee(response);
    }

    async sellShop(price, amount = 1, duration = 1, hidden = false) {
        if (amount > this._item_amount) amount = this._item_amount;
        let data = {amount, shopDuration: duration, hidden, id: this._id, price, type:"shop"};
        let response = await ApiRequest.requestMainPOST(this._auction._path + "sell/item", {}, JSON.stringify(data), {token: this._auction._client._token});
        return new SellFee(response);
    }

    async sellAuc(buyoutPrice, startBid, amount = 1, duration = 1, hidden = false) {
        if (amount > this._item_amount) amount = this._item_amount;
        let data = {amount, aucDuration: duration, hidden, id: this._id, buyoutPriceUnit:buyoutPrice, startBid, type:"auc"};
        let response = await ApiRequest.requestMainPOST(this._auction._path + "sell/item", {}, JSON.stringify(data), {token: this._auction._client._token});
        return new SellFee(response);
    }

    async trash() {
        let response = await ApiRequest.requestMainPOST(this._auction._path + "trash/item", {}, JSON.stringify({id:this._id}), {token: this._auction._client._token});
        return response.message;
    }
}

module.exports = Item;