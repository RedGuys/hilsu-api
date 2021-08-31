const ChatStickerMetadata = require('./ChatStickerMetadata');

class ChatSticker {
    _id;
    _stickerSetId;
    _emoji;
    _metadata;
    _downloadToken;
    _thumbDownloadToken;
    _sha256;
    _thumbSha256;

    constructor(data) {
        this._id = data.id;
        this._stickerSetId = data.stickerSetId;
        this._emoji = data.emoji;
        this._metadata = new ChatStickerMetadata(data.metadata);
        this._downloadToken = data.downloadToken;
        this._thumbDownloadToken = data.thumbDownloadToken;
        this._sha256 = data.sha256;
        this._thumbSha256 = data.thumbSha256;
    }

    get id() {
        return this._id;
    }

    get stickerSetId() {
        return this._stickerSetId;
    }

    get emoji() {
        return this._emoji;
    }

    get metadata() {
        return this._metadata;
    }

    get downloadToken() {
        return this._downloadToken;
    }

    get thumbDownloadToken() {
        return this._thumbDownloadToken;
    }

    get sha256() {
        return this._sha256;
    }

    get thumbSha256() {
        return this._thumbSha256;
    }
}

module.exports = ChatSticker;