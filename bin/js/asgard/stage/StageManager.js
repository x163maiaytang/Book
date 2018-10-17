var asgard;
(function (asgard) {
    var stage;
    (function (stage) {
        var StageManager = /** @class */ (function () {
            function StageManager() {
            }
            StageManager.init = function (stageFactory) {
                this._curStage = new Laya.Dictionary();
                if (stageFactory && this._stageFactory.indexOf(stageFactory.getAppName()) < 0) {
                    this._stageFactory.set(stageFactory.getAppName(), stageFactory);
                }
            };
            StageManager.LastStageId = function (appname) {
                return this._lastStageId.get(appname);
            };
            StageManager.CurStage = function (appname) {
                return this._curStage.get(appname);
            };
            StageManager.enterStage = function (appname, stageid) {
                var state = this._curStage.get(appname);
                if (state) {
                    this._lastStageId.set(appname, state.stageId);
                    state.onExit();
                    this._curStage.set(appname, null);
                }
                var stagefactory = this._stageFactory.get(appname);
                if (stagefactory) {
                    var loginState = stagefactory.getStage(stageid);
                    this._curStage.set(appname, loginState);
                    if (loginState) {
                        loginState.onEnter();
                    }
                }
            };
            StageManager.onFrame = function (curtime, delta) {
                for (var _i = 0, _a = this._curStage.keys; _i < _a.length; _i++) {
                    var v = _a[_i];
                    var state = this._curStage.get(v);
                    if (state) {
                        state.onFrame(curtime, delta);
                    }
                }
            };
            StageManager._curStage = new Laya.Dictionary();
            StageManager._stageFactory = new Laya.Dictionary();
            StageManager._lastStageId = new Laya.Dictionary();
            return StageManager;
        }());
        stage.StageManager = StageManager;
    })(stage = asgard.stage || (asgard.stage = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=StageManager.js.map