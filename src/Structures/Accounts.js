const vk = require("./Vk");
const email = require("./Email");
const google = require("./Google");
const telegram = require("./Telegram");
const discord = require("./Discord");

module.exports = class Accounts {
    _vk = vk.prototype;
    _email = email.prototype;
    _google = google.prototype;
    _telegram = telegram.prototype;
    _discord = discord.prototype;

    get vk() {
        return this._vk;
    }
    get email() {
        return this._email;
    }
    get google() {
        return this._google;
    }
    get telegram() {
        return this._telegram;
    }
    get discord() {
        return this._discord;
    }
}
