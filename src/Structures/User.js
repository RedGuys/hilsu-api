class User {

    _id;
    _uuid;
    _username;

    get id() {
        return this._id;
    }

    get uuid() {
        return this._uuid;
    }

    get username() {
        return this._username;
    }
}

module.exports = User;