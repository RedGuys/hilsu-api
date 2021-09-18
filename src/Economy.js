const ApiRequest = require("./ApiRequest");
const User = require("./Structures/User");
const UserBalances = require("./Structures/UserBalances")
const Change = require("./Structures/Change");
const Transfer = require("./Structures/Transfer");
const TopUser = require("./Structures/TopUser");
const ChangesResponse = require("./responses/ChangesResponse");
const BalanceResponse = require("./responses/BalanceResponse");

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
        let transfers = [];
        for (let transfer of response.transfers) {
            transfers.push(new Transfer(transfer));
        }
        return {userId: response.userId, username: response.username, transfers};
    }

    async transfersCount(currency = "coins") {
        let response = await ApiRequest.requestGET(this._path + "transfersCount", {currency},{token: this._client._token});
        return {userId: response.userId, username: response.username, count: response.count};
    }

    async changesCount(currency = "coins") {
        let response = await ApiRequest.requestGET(this._path + "changesCount", {currency},{token: this._client._token});
        return {userId: response.userId, username: response.username, count: response.count};
    }

    async top(currency= "", limit = 100) {
        if(limit>100) limit=100;
        let response = await ApiRequest.requestGET(this._path + "top", {currency, limit},{token: this._client._token});
        let users = [];
        for (let user of response.users) {
            users.push(new TopUser(user));
        }
        return {users};
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