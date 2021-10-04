const ApiRequest = require("./ApiRequest");
const ChangesResponse = require("./responses/ChangesResponse");
const BalanceResponse = require("./responses/BalanceResponse");
const TransfersCountResponse = require("./responses/TransfersCountResponse");
const ChangesCountResponse = require("./responses/ChangesCountResponse");
const TopResponse = require("./responses/TopResponse");
const TransfersResponse = require("./responses/TransfersResponse");

class Economy {

    _client;
    _path = "economy/";

    constructor(client) {
        this._client = client;
    }

    async balance() {
        let response = await ApiRequest.requestGET(this._path + "balance", {}, {token: this._client._token});
        return new BalanceResponse(response);
    }

    async changes(currency = "coins",limit = 10, offset=0) {
        let response = await ApiRequest.requestGET(this._path + "changes", {currency,limit,offset},{token: this._client._token});
        return new ChangesResponse(response);
    }

    async transfers(currency = "coins",limit = 10, offset=0) {
        let response = await ApiRequest.requestGET(this._path + "transfers", {currency,limit,offset},{token: this._client._token});
        return new TransfersResponse(response);
    }

    async transfersCount(currency = "coins") {
        let response = await ApiRequest.requestGET(this._path + "transfersCount", {currency},{token: this._client._token});
        return new TransfersCountResponse(response);
    }

    async changesCount(currency = "coins") {
        let response = await ApiRequest.requestGET(this._path + "changesCount", {currency},{token: this._client._token});
        return new ChangesCountResponse(response);
    }

    async top(currency= "", limit = 100) {
        if(limit>100) limit=100;
        let response = await ApiRequest.requestGET(this._path + "top", {currency, limit},{token: this._client._token});
        return new TopResponse(response);
    }

    async transfer(target, amount, description = "", currency = "coins") {
        let params = {currency, amount};
        if(description !== "") params.description = description;
        if(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(target)) {
            params.targetId = target;
        } else {
            params.targetName = target;
        }
        let response = await ApiRequest.requestPOST(this._path + "transfer",{} , JSON.stringify(params),{token: this._client._token});
        return {currency: response.currency, senderId: response.senderId, senderName: response.senderName, targetId: response.targetId, targetName: response.targetName, balance: response.balance};
    }
}

module.exports = Economy;