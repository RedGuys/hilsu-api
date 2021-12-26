const ApiRequest = require("./ApiRequest");
const Economy = require("./Economy");
const GetTokenResponse = require("./responses/GetTokenResponse");
const Auction = require("./Auction");
const ExchangeClient = require("./exchange/ExchangeClient");
const ChatClient = require("./chat/ChatClient");

class Client {
    _token = null;
    _baseUrl = "https://api.hil.su/";

    constructor(token) {
        this._token = token;
    }

    get baseUrl() {
        return this._baseUrl;
    }
    set baseUrl(value) {
        this._baseUrl = value;
    }

    get economy() {
        return new Economy(this);
    }

    get auction() {
        return new Auction(this);
    }

    get exchange() {
        return new ExchangeClient(this._token);
    }

    chat(chat = "talk") {
        return new ChatClient(chat, this._token);
    }

    static async getTokenViaPasswordAuth(username, password) {
        return new GetTokenResponse(await ApiRequest.requestPOST("auth/account/login/password", {}, JSON.stringify({username, password})));
    }
}

module.exports = Client;