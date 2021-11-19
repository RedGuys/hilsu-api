const ApiRequest = require("./ApiRequest");
const ItemsResponse = require("./responses/ItemsResponse");
const ListResponse = require("./responses/ListResponse");

class Auction {

    _client;
    _path = "auction/";

    constructor(client) {
        this._client = client;
    }

    async items() {
        let response = await ApiRequest.requestMainGET(this._path + "items", {}, {token: this._client._token});
        return new ItemsResponse(response, this);
    }

    async list(page = 1, order = "expires_at_asc") {
        let response = await ApiRequest.requestMainGET(this._path + "list", {order,page}, {token: this._client._token});
        return new ListResponse(response, this);
    }
}

module.exports = Auction;