class ChatAttachmentMeta {
    _caption;
    _fileName;
    _mimeType;
    _fileSize;
    _width;
    _height;
    _performer;
    _title;
    _duration;

    constructor(data) {
        this._caption = data.caption;
        this._fileName = data.fileName;
        this._mimeType = data.mimeType;
        this._fileSize = data.fileSize;
        this._width = data.width;
        this._height = data.height;
        this._performer = data.performer;
        this._title = data.title;
        this._duration = data.duration;
    }

    get caption() {
        return this._caption;
    }

    get fileName() {
        return this._fileName;
    }

    get mimeType() {
        return this._mimeType;
    }

    get fileSize() {
        return this._fileSize;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get performer() {
        return this._performer;
    }

    get title() {
        return this._title;
    }

    get duration() {
        return this._duration;
    }
}

module.exports = ChatAttachmentMeta;