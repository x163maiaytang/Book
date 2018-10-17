var logic;
(function (logic) {
    var StageType;
    (function (StageType) {
        StageType[StageType["STAGE_NONE"] = 0] = "STAGE_NONE";
        StageType[StageType["STAGE_UPDATE"] = 1] = "STAGE_UPDATE";
        StageType[StageType["STAGE_WELCOME"] = 2] = "STAGE_WELCOME";
        StageType[StageType["STAGE_LOADING"] = 3] = "STAGE_LOADING";
        StageType[StageType["STAGE_LOGIN"] = 4] = "STAGE_LOGIN";
        StageType[StageType["STAGE_GAME"] = 5] = "STAGE_GAME";
    })(StageType = logic.StageType || (logic.StageType = {}));
    // 程序入口
    var StageFactory = /** @class */ (function () {
        function StageFactory() {
        }
        StageFactory.prototype.getAppName = function () {
            return logic.GameConst.APP_NAME;
        };
        StageFactory.prototype.getStage = function (stageid) {
            switch (stageid) {
                case logic.StageType.STAGE_UPDATE:
                    return new logic.UpdateStage();
                case logic.StageType.STAGE_WELCOME:
                    return new logic.WelcomeStage();
                case logic.StageType.STAGE_LOADING:
                    return new logic.LoadingStage();
                case logic.StageType.STAGE_GAME:
                    return new logic.GameStage();
            }
            return null;
        };
        return StageFactory;
    }());
    logic.StageFactory = StageFactory;
})(logic || (logic = {}));
//# sourceMappingURL=StageFactory.js.map