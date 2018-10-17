var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var logic;
(function (logic) {
    // 程序入口
    var WelcomeStage = /** @class */ (function (_super) {
        __extends(WelcomeStage, _super);
        function WelcomeStage() {
            var _this = _super.call(this, logic.GameConst.APP_NAME, logic.StageType.STAGE_WELCOME) || this;
            _this._delayExit = 1000;
            return _this;
        }
        WelcomeStage.prototype.onEnter = function () {
            // asgard.ui.UIManager.openView(logic.GameConst.APP_NAME,logic.UIRes.LOGO);
            this._delayExit = Laya.timer.currTimer + 2000; //在Logo界面停2秒
        };
        WelcomeStage.prototype.onExit = function () {
            // asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,logic.UIRes.LOGO);
        };
        WelcomeStage.prototype.onFrame = function (curtime, delta) {
            if (this._delayExit > 0 && curtime > this._delayExit) {
                asgard.stage.StageManager.enterStage(logic.GameConst.APP_NAME, logic.StageType.STAGE_LOADING);
            }
        };
        WelcomeStage.prototype.init = function () {
        };
        return WelcomeStage;
    }(asgard.stage.BaseStage));
    logic.WelcomeStage = WelcomeStage;
})(logic || (logic = {}));
//# sourceMappingURL=WelcomeStage.js.map