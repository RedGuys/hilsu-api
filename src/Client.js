const ApiRequest = require("./ApiRequest");
const Economy = require("./Economy");

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

    static async getTokenViaPasswordAuth(username, password) {
        return await ApiRequest.requestPOST("auth/account/login/password", {}, JSON.stringify({username, password}));
    }
}

module.exports = Client;