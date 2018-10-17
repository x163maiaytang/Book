var asgard;
(function (asgard) {
    var stage;
    (function (stage) {
        var BaseStage = /** @class */ (function () {
            function BaseStage(appname, stageId) {
                this._appName = appname;
                this._stageId = stageId;
            }
            Object.defineProperty(BaseStage.prototype, "appName", {
                get: function () {
                    return this._appName;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BaseStage.prototype, "stageId", {
                get: function () {
                    return this._stageId;
                },
                enumerable: true,
                configurable: true
            });
            BaseStage.prototype.onEnter = function () {
            };
            BaseStage.prototype.onFrame = function (curtime, delta) {
            };
            BaseStage.prototype.onExit = function () {
            };
            return BaseStage;
        }());
        stage.BaseStage = BaseStage;
    })(stage = asgard.stage || (asgard.stage = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=BaseStage.js.map