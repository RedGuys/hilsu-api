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
}

module.exports = Economy;