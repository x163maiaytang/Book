var logic;
(function (logic) {
    var ModuleType;
    (function (ModuleType) {
        ModuleType[ModuleType["MODULE_GAME"] = 0] = "MODULE_GAME";
    })(ModuleType = logic.ModuleType || (logic.ModuleType = {}));
    // 程序入口
    var ModuleFactory = /** @class */ (function () {
        function ModuleFactory() {
        }
        ModuleFactory.prototype.getAppName = function () {
            return logic.GameConst.APP_NAME;
        };
        ModuleFactory.prototype.getModule = function (moduleid) {
            switch (moduleid) {
                case logic.ModuleType.MODULE_GAME: return new logic.GameModule();
            }
            return null;
        };
        return ModuleFactory;
    }());
    logic.ModuleFactory = ModuleFactory;
})(logic || (logic = {}));
//# sourceMappingURL=ModuleFactory.js.map