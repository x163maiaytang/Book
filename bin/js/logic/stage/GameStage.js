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
    var GameStage = /** @class */ (function (_super) {
        __extends(GameStage, _super);
        function GameStage() {
            return _super.call(this, logic.GameConst.APP_NAME, logic.StageType.STAGE_GAME) || this;
        }
        GameStage.prototype.onEnter = function () {
            asgard.ui.UIManager.openView(logic.GameConst.APP_NAME, logic.UIRes.BOOK);
        };
        GameStage.prototype.onExit = function () {
            // asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,logic.UIRes.GAMEMAINROOT);
        };
        return GameStage;
    }(asgard.stage.BaseStage));
    logic.GameStage = GameStage;
})(logic || (logic = {}));
//# sourceMappingURL=GameStage.js.map