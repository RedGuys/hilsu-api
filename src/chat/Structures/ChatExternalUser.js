class ChatExternalUser {
    _app;
    _appName;
    _externalId;
    _name;

    constructor(data) {
        this._app = data.app;
        this._appName = data.appName;
        this._externalId = data.externalId;
        this._name = data.name;
    }

    get app() {
        return this._app;
    }

    get appName() {
        return this._appName;
    }

    get externalId() {
        return this._externalId;
    }

    get name() {
        return this._name;
    }
}

module.exports = ChatExternalUser;