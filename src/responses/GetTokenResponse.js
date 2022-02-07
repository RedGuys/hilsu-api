class GetTokenResponse {
    _accessToken;
    _expires;

    get accessToken() {
        return this._accessToken;
    }

    get expires() {
        return this._expires;
    }
}

module.exports = GetTokenResponse;
