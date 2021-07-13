class User {

    _id;
    _uuid;
    _username;

    constructor(data) {
        this._id = data.id;
        this._uuid = data.uuid;
        this._username = data.username;
    }

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