var asgard;
(function (asgard) {
    var net;
    (function (net) {
        var NetSession = /** @class */ (function () {
            function NetSession(connectionFlag) {
                this._connectionFlag = connectionFlag;
                this._net = new asgard.net.TCPClient();
                this._net.registerEventListener(laya.events.Event.OPEN, this, this.OnConnected);
                this._net.registerEventListener(laya.events.Event.MESSAGE, this, this.OnMsgReceive);
                this._connectedNotify = null;
            }
            Object.defineProperty(NetSession.prototype, "ConnectionFlag", {
                get: function () {
                    return this._connectionFlag;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NetSession.prototype, "IsConnected", {
                get: function () {
                    return this._net.connected;
                },
                enumerable: true,
                configurable: true
            });
            NetSession.prototype.setConnectedNotify = function (caller, handler) {
                this._connectedNotify = new asgard.utils.SimpleDelegate(caller, handler);
            };
            NetSession.prototype.setMessageNotify = function (caller, handler) {
                this._messageNotify = new asgard.utils.SimpleDelegate(caller, handler);
            };
            NetSession.prototype.tryConnection = function (svrAddress, svrPort) {
                this._net.connect(svrAddress, svrPort);
            };
            NetSession.prototype.tryConnectionByUrl = function (url) {
                this._net.connectByUrl(url);
            };
            NetSession.prototype.OnConnected = function () {
                if (this._connectedNotify) {
                    this._connectedNotify.apply();
                }
            };
            NetSession.prototype.sendMessage = function (msgID, arraybuffer) {
                var _bytes = new laya.utils.Byte();
                _bytes.endian = Laya.Byte.BIG_ENDIAN;
                _bytes.writeArrayBuffer(arraybuffer);
                this._net.sendMessages(msgID, _bytes);
                _bytes = null;
            };
            NetSession.prototype.OnMsgReceive = function (msgId, msgData) {
                if (this._messageNotify) {
                    this._messageNotify.apply([this._connectionFlag, msgId, msgData]);
                }
            };
            return NetSession;
        }());
        net.NetSession = NetSession;
        var NetManager = /** @class */ (function () {
            function NetManager() {
            }
            NetManager.tryConnect = function (connectionFlag, svrAddress, svrPort, caller, onConnectedNotify) {
                var session;
                if (NetManager._sessions.indexOf(connectionFlag) < 0) {
                    session = new NetSession(connectionFlag);
                    session.setMessageNotify(asgard.message.MessageDispatcher, asgard.message.MessageDispatcher._onMessageNotify);
                    NetManager._sessions.set(connectionFlag, session);
                }
                else {
                    session = NetManager._sessions.get(connectionFlag);
                }
                if (session) {
                    session.setConnectedNotify(caller, onConnectedNotify);
                    session.tryConnection(svrAddress, svrPort);
                }
                return session;
            };
            NetManager.tryConnectByUrl = function (connectionFlag, url, caller, onConnectedNotify) {
                var session;
                if (NetManager._sessions.indexOf(connectionFlag) < 0) {
                    session = new NetSession(connectionFlag);
                    session.setMessageNotify(asgard.message.MessageDispatcher, asgard.message.MessageDispatcher._onMessageNotify);
                    NetManager._sessions.set(connectionFlag, session);
                }
                else {
                    session = NetManager._sessions.get(connectionFlag);
                }
                if (session) {
                    session.setConnectedNotify(caller, onConnectedNotify);
                    session.tryConnectionByUrl(url);
                }
                return session;
            };
            NetManager.sendMessage = function (connectionFlag, msgID, arraybuffer) {
                var session = NetManager._sessions.get(connectionFlag);
                if (session) {
                    session.sendMessage(msgID, arraybuffer);
                }
            };
            NetManager.IsConnected = function (connectionFlag) {
                var session = NetManager._sessions.get(connectionFlag);
                if (session) {
                    return session.IsConnected;
                }
                return false;
            };
            NetManager._sessions = new Laya.Dictionary();
            return NetManager;
        }());
        net.NetManager = NetManager;
    })(net = asgard.net || (asgard.net = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=NetManager.js.map