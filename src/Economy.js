const ApiRequest = require("./ApiRequest");
const User = require("./Structures/User");
const UserBalances = require("./Structures/UserBalances")

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
}

module.exports = Economy;