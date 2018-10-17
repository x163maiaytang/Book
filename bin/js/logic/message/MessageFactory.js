var logic;
(function (logic) {
    var MessageFactory = /** @class */ (function () {
        function MessageFactory() {
            this.messageMap = new laya.utils.Dictionary();
            this.handlerMap = new laya.utils.Dictionary();
        }
        MessageFactory.prototype.getAppName = function () {
            return logic.GameConst.APP_NAME;
        };
        MessageFactory.prototype.registMessage = function (msgId, msgHandler, msgMethod, handler, processMethod) {
            if (msgHandler && msgId > 0) {
                var msgDelg = new asgard.utils.SimpleDelegate(msgHandler, msgMethod);
                this.messageMap.set(msgId, msgDelg);
                var msgProcessDelg = new asgard.utils.SimpleDelegate(handler, processMethod);
                this.handlerMap.set(msgId, msgProcessDelg);
            }
            else {
                throw new Error("Unsupported type!");
            }
        };
        MessageFactory.prototype.getMessage = function (msgId) {
            return this.messageMap.get(msgId);
        };
        MessageFactory.prototype.getHandler = function (msgId) {
            return this.handlerMap.get(msgId);
        };
        MessageFactory.prototype.init = function () {
            var _accountModule = asgard.module.ModuleManager.getModule(logic.GameConst.APP_NAME, logic.ModuleType.MODULE_ACCOUNT);
            // this.registMessage(awesome.MSGID.PACKET_SC_LOGIN, awesome.SC_LOGIN,awesome.SC_LOGIN.decode, _accountModule, _accountModule.RecvLoginPushServerMsg);
        };
        return MessageFactory;
    }());
    logic.MessageFactory = MessageFactory;
})(logic || (logic = {}));
//# sourceMappingURL=MessageFactory.js.map