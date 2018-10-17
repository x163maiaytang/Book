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
/**
* name
*/
var logic;
(function (logic) {
    // 程序入口
    var LoadingStage = /** @class */ (function (_super) {
        __extends(LoadingStage, _super);
        function LoadingStage() {
            var _this = _super.call(this, logic.GameConst.APP_NAME, logic.StageType.STAGE_LOADING) || this;
            _this._delayExit = 1000;
            return _this;
        }
        LoadingStage.prototype.onEnter = function () {
            logic.SoundManager.initSoundSystem();
            asgard.ui.UIManager.openView(logic.GameConst.APP_NAME, logic.UIRes.LOADING);
        };
        LoadingStage.prototype.onExit = function () {
            asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME, logic.UIRes.LOADING);
        };
        LoadingStage.prototype.onFrame = function (curtime, delta) {
        };
        LoadingStage.prototype.init = function () {
        };
        return LoadingStage;
    }(asgard.stage.BaseStage));
    logic.LoadingStage = LoadingStage;
})(logic || (logic = {}));
//# sourceMappingURL=LoadingStage.js.map