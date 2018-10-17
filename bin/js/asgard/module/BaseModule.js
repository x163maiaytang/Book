var asgard;
(function (asgard) {
    var module;
    (function (module) {
        var BaseModule = /** @class */ (function () {
            function BaseModule(appname, moduleId) {
                this._appName = appname;
                this._moduleId = moduleId;
            }
            Object.defineProperty(BaseModule.prototype, "appName", {
                get: function () {
                    return this._appName;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BaseModule.prototype, "moduleId", {
                get: function () {
                    return this._moduleId;
                },
                enumerable: true,
                configurable: true
            });
            return BaseModule;
        }());
        module.BaseModule = BaseModule;
    })(module = asgard.module || (asgard.module = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=BaseModule.js.map