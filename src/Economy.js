const ApiRequest = require("./ApiRequest");
const User = require("./Structures/User");
const UserBalances = require("./Structures/UserBalances")
const Change = require("./Structures/Change");

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
}

module.exports = Economy;