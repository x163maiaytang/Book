var asgard;
(function (asgard) {
    var message;
    (function (message) {
        var MessageDispatcher = /** @class */ (function () {
            function MessageDispatcher() {
            }
            MessageDispatcher.init = function (messageFactory) {
                if (messageFactory && MessageDispatcher._messageFactory.indexOf(messageFactory.getAppName()) < 0) {
                    MessageDispatcher._messageFactory.set(messageFactory.getAppName(), messageFactory);
                    messageFactory.init();
                }
            };
            MessageDispatcher.clear = function () {
            };
            MessageDispatcher._onMessageNotify = function (connectionFlag, msgId, msgData) {
                var messagefactory = MessageDispatcher._messageFactory.get(connectionFlag);
                if (messagefactory) {
                    var msgDelg = messagefactory.getMessage(msgId);
                    if (msgDelg) {
                        var length_1 = msgData.length;
                        var reader = new protobuf.Reader(msgData.getUint8Array(0, length_1));
                        var returnMsg = msgDelg.apply([reader, length_1]); //decode
                        var handler = messagefactory.getHandler(msgId);
                        handler.apply([returnMsg]); //回调
                    }
                    else {
                        throw new Error("Unsupported msg:" + msgId);
                    }
                }
            };
            MessageDispatcher._messageFactory = new Laya.Dictionary();
            return MessageDispatcher;
        }());
        message.MessageDispatcher = MessageDispatcher;
    })(message = asgard.message || (asgard.message = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=MessageDispatcher.js.map