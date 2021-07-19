class Transfer {

    _id;
    _peerId;
    _peerName;
    _delta;
    _comment;
    _time;

    constructor(data) {
        this._id = data.id;
        this._peerId = data.peerId;
        this._peerName = data.peerName;
        this._delta = data.delta;
        this._comment = data.comment;
        this._time = new Date(data.time*1000);
    }

    get id() {
        return this._id;
    }

    get peerId() {
        return this._peerId;
    }

    get peerName() {
        return this._peerName;
    }

    get delta() {
        return this._delta;
    }

    get comment() {
        return this._comment;
    }

    get time() {
        return this._time;
    }
}

module.exports = Transfer;