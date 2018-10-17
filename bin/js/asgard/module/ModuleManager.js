var asgard;
(function (asgard) {
    var module;
    (function (module) {
        var ModuleManager = /** @class */ (function () {
            function ModuleManager() {
            }
            ModuleManager.init = function (moduleFactory) {
                if (moduleFactory && ModuleManager._moduleFactory.indexOf(moduleFactory.getAppName()) < 0) {
                    ModuleManager._moduleFactory.set(moduleFactory.getAppName(), moduleFactory);
                }
            };
            ModuleManager.clear = function () {
                ModuleManager._moduleMap.splice(0);
            };
            ModuleManager.findModule = function (appname, moduleId) {
                var fuimodule = null;
                for (var _i = 0, _a = ModuleManager._moduleMap; _i < _a.length; _i++) {
                    var uimodule = _a[_i];
                    if (uimodule && uimodule.moduleId == moduleId && uimodule.appName == appname) {
                        fuimodule = uimodule;
                    }
                }
                return fuimodule;
            };
            ModuleManager.RegisterModule = function (appname, moduleObj) {
                var gameModule = ModuleManager.findModule(appname, moduleObj.moduleId);
                if (!gameModule) {
                    var modulefactory = ModuleManager._moduleFactory.get(appname);
                    if (modulefactory) {
                        ModuleManager._moduleMap.push(moduleObj);
                    }
                }
            };
            ModuleManager.getModule = function (appname, moduleId) {
                var gameModule = ModuleManager.findModule(appname, moduleId);
                if (!gameModule) {
                    var modulefactory = ModuleManager._moduleFactory.get(appname);
                    if (modulefactory) {
                        gameModule = modulefactory.getModule(moduleId);
                        if (gameModule) {
                            ModuleManager._moduleMap.push(gameModule);
                        }
                    }
                }
                return gameModule;
            };
            ModuleManager._moduleFactory = new Laya.Dictionary();
            ModuleManager._moduleMap = new Array();
            return ModuleManager;
        }());
        module.ModuleManager = ModuleManager;
    })(module = asgard.module || (asgard.module = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=ModuleManager.js.map