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
    var UpdateStage = /** @class */ (function (_super) {
        __extends(UpdateStage, _super);
        function UpdateStage() {
            return _super.call(this, logic.GameConst.APP_NAME, logic.StageType.STAGE_UPDATE) || this;
        }
        UpdateStage.prototype.onEnter = function () {
            this._delayExit = Laya.timer.currTimer + 1;
        };
        UpdateStage.prototype.onExit = function () {
        };
        UpdateStage.prototype.onFrame = function (curtime, delta) {
            if (curtime > this._delayExit) {
                asgard.stage.StageManager.enterStage(logic.GameConst.APP_NAME, logic.StageType.STAGE_WELCOME);
                //this.enterStage(stage.STAGE_LOADING);
            }
        };
        return UpdateStage;
    }(asgard.stage.BaseStage));
    logic.UpdateStage = UpdateStage;
})(logic || (logic = {}));
//# sourceMappingURL=UpdateStage.js.map