module.exports = class InvitedUser {
    _username;
    _awarded;

    get username() {
        return this._username;
    }
    get awarded() {
        return this._awarded;
    }
}
