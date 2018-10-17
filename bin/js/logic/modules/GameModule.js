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
    var GameModule = /** @class */ (function (_super) {
        __extends(GameModule, _super);
        function GameModule() {
            return _super.call(this, logic.GameConst.APP_NAME, logic.ModuleType.MODULE_GAME) || this;
        }
        return GameModule;
    }(asgard.module.BaseModule));
    logic.GameModule = GameModule;
})(logic || (logic = {}));
//# sourceMappingURL=GameModule.js.map