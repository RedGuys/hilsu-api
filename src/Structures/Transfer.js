class Transfer {

    _id;
    _peerId;
    _peerName;
    _delta;
    _comment;
    _time;

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
        return new Date(this._time*1000);
    }
}

module.exports = Transfer;