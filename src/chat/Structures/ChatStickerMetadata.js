class ChatStickerMetadata {
    _width;
    _height;
    _thumbWidth;
    _thumbHeight;
    _isAnimated;
    _fileSize;
    _thumbSize;

    constructor(data) {
        this._width = data.width;
        this._height = data.height;
        this._thumbWidth = data.thumbWidth;
        this._thumbHeight = data.thumbHeight;
        this._isAnimated = data.isAnimated;
        this._fileSize = data.fileSize;
        this._thumbSize = data.thumbSize;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get thumbWidth() {
        return this._thumbWidth;
    }

    get thumbHeight() {
        return this._thumbHeight;
    }

    get isAnimated() {
        return this._isAnimated;
    }

    get fileSize() {
        return this._fileSize;
    }

    get thumbSize() {
        return this._thumbSize;
    }
}

module.exports = ChatStickerMetadata;