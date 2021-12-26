module.exports = class UserSkin {
    _flat_url;
    _url;
    _url_v2;
    _cape_url;
    _avatar;
    _has_skin;
    _has_cape;
    _has_cape_cap;
    _has_hd;
    _has_one_hd;

    get flat_url() {
        return this._flat_url;
    }
    get url() {
        return this._url;
    }
    get url_v2() {
        return this._url_v2;
    }
    get cape_url() {
        return this._cape_url;
    }
    get avatar() {
        return this._avatar;
    }
    get has_skin() {
        return this._has_skin;
    }
    get has_cape() {
        return this._has_cape;
    }
    get has_cape_cap() {
        return this._has_cape_cap;
    }
    get has_hd() {
        return this._has_hd;
    }
    get has_one_hd() {
        return this._has_one_hd;
    }
}
