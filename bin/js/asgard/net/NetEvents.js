var asgard;
(function (asgard) {
    var net;
    (function (net) {
        var Event = laya.events.Event;
        var SimpleDelegate = asgard.utils.SimpleDelegate;
        var NetEvents = /** @class */ (function () {
            function NetEvents() {
            }
            NetEvents.prototype.registerEventListener = function (actionType, caller, listener) {
                switch (actionType) {
                    case Event.OPEN:
                        this.onConnected = new SimpleDelegate(caller, listener);
                        break;
                    case Event.CLOSE:
                        this.onClose = new SimpleDelegate(caller, listener);
                        break;
                    case Event.ERROR:
                        this.onError = new SimpleDelegate(caller, listener);
                        break;
                    case Event.MESSAGE:
                        this.onMessageReceived = new SimpleDelegate(caller, listener);
                        break;
                }
            };
            NetEvents.prototype.unregisterEventListener = function (actionType) {
                switch (actionType) {
                    case Event.OPEN:
                        this.onConnected = null;
                        break;
                    case Event.CLOSE:
                        this.onClose = null;
                        break;
                    case Event.ERROR:
                        this.onError = null;
                        break;
                    case Event.MESSAGE:
                        this.onMessageReceived = null;
                        break;
                }
            };
            NetEvents.prototype.connectedNotify = function () {
                if (this.onConnected) {
                    this.onConnected.apply();
                }
            };
            NetEvents.prototype.closeNotify = function () {
                if (this.onClose) {
                    this.onClose.apply();
                    console.log("SimpleSocket.closeHandler(), 数据连接关闭!");
                }
            };
            NetEvents.prototype.errorNotify = function () {
                if (this.onError) {
                    this.onError.apply();
                    console.log("SimpleSocket.errorHandler(), 数据连接错误!");
                }
            };
            NetEvents.prototype.messageReceivedNotify = function (cmd, msgdata) {
                if (this.onMessageReceived) {
                    this.onMessageReceived.apply([cmd, msgdata]);
                }
            };
            return NetEvents;
        }());
        net.NetEvents = NetEvents;
    })(net = asgard.net || (asgard.net = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=NetEvents.js.map