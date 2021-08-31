class ChatAttachmentType {
    _kind;
    _isThumbnail;
    _thumbnailBaseKind;

    constructor(data) {
        this._kind = data.kind;
        this._isThumbnail = data.isThumbnail;
        this._thumbnailBaseKind = data.thumbnailBaseKind;
    }

    get kind() {
        return this._kind;
    }

    get isThumbnail() {
        return this._isThumbnail;
    }

    get thumbnailBaseKind() {
        return this._thumbnailBaseKind;
    }
}

module.exports = ChatAttachmentType;