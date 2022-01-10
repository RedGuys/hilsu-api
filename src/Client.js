const ApiRequest = require("./ApiRequest");
const Economy = require("./Economy");
const GetTokenResponse = require("./responses/GetTokenResponse");
const Auction = require("./Auction");
const ExchangeClient = require("./exchange/ExchangeClient");
const ChatClient = require("./chat/ChatClient");
const ResponseParser = require("./utils/ResponseParser");
const UserInfoResponse = require("./responses/UserInfoResponse");
const InvitedUser = require("./Structures/InvitedUser");

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

    async userInfo() {
        let response = await ApiRequest.requestMainGET("user/info/index", {},{token: this._token});
        return ResponseParser.parse(UserInfoResponse.prototype,response);
    }

    async invitedUsers() {
        let invitedUsers = [];
        for (let user of await ApiRequest.requestMainGET("user/invited", {}, {token: this._token})) {
            invitedUsers.push(ResponseParser.parse(InvitedUser.prototype,user));
        }
        return invitedUsers;
    }

    static async getTokenViaPasswordAuth(username, password) {
        return new GetTokenResponse(await ApiRequest.requestPOST("auth/account/login/password", {}, JSON.stringify({username, password})));
    }
}

module.exports = Client;