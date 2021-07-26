const ApiRequest = require("./ApiRequest");
const User = require("./Structures/User");
const UserBalances = require("./Structures/UserBalances")
const Change = require("./Structures/Change");
const Transfer = require("./Structures/Transfer");

class Economy {

    _client;
    _path = "economy/";

    constructor(client) {
        this._client = client;
    }

    async balance() {
        let response = await ApiRequest.requestGET(this._path + "balance", {}, {token: this._client._token});
        return {user:new User(response.user),balances:new UserBalances(response.balances)}
    }

    async changes(currency = "coins",limit = 10, offset=0) {
        let response = await ApiRequest.requestGET(this._path + "changes", {currency,limit,offset},{token: this._client._token});
        let changes = [];
        for (let change of response.changes) {
            changes.push(new Change(change));
        }
        return {userId: response.userId, username: response.username, changes};
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