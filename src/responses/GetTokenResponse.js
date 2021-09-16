class GetTokenResponse {
    _accessToken;
    _expires;

    constructor(accessToken, expires) {
        this._accessToken = accessToken;
        this._expires = expires;
    }

    get accessToken() {
        return this._accessToken;
    }

    get expires() {
        return this._expires;
    }
}