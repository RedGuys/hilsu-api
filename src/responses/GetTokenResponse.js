class GetTokenResponse {
    _accessToken;
    _expires;

    constructor(data) {
        this._accessToken = data.accessToken;
        this._expires = data.expires;
    }

    get accessToken() {
        return this._accessToken;
    }

    get expires() {
        return this._expires;
    }
}