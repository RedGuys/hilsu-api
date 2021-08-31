const ChatAttachmentType = require("./ChatAttachmentType");
const ChatSticker = require("./ChatSticker");
const ChatAttachmentMeta = require("./ChatAttachmentMeta");
const Axios = require("axios");
const Path = require("path");
const Fs = require("fs");

class ChatAttachment {
    _id;
    _kind;
    _primaryId;
    _downloadToken;
    _sha256;
    _sticker;
    _meta;
    _chat;

    constructor(data, chat) {
        this._id = data.id;
        this._kind = new ChatAttachmentType(data.kind);
        this._primaryId = data.primaryId;
        this._downloadToken = data.downloadToken;
        this._sha256 = data.sha256;
        this._sticker = data.sticker !== undefined ? new ChatSticker(data.sticker):undefined;
        this._meta = new ChatAttachmentMeta(data.meta);
        this._chat = chat;
    }

    get id() {
        return this._id;
    }

    get kind() {
        return this._kind;
    }

    get primaryId() {
        return this._primaryId;
    }

    get downloadToken() {
        return this._downloadToken;
    }

    get sha256() {
        return this._sha256;
    }

    get sticker() {
        return this._sticker;
    }

    get meta() {
        return this._meta;
    }

    async saveTo(path) {
        let url = 'https://api.hil.su/v2/chat/' + this._chat + '/file?t='+this._downloadToken;
        const writer = Fs.createWriteStream(path);

        const response = await Axios({
            url,
            method: 'GET',
            responseType: 'stream'
        })

        response.data.pipe(writer)

        return new Promise((resolve, reject) => {
            writer.on('finish', resolve)
            writer.on('error', reject)
        });
    }
}

module.exports = ChatAttachment;