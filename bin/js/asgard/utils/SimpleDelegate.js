var asgard;
(function (asgard) {
    var utils;
    (function (utils) {
        var SimpleDelegate = /** @class */ (function () {
            function SimpleDelegate(caller, method) {
                this._caller = caller;
                this._method = method;
            }
            SimpleDelegate.prototype.setMethod = function (caller, method) {
                this._caller = caller;
                this._method = method;
            };
            SimpleDelegate.prototype.isSameMethod = function (caller, method) {
                return (this._caller && this._caller == caller && this._method && this._method == method);
            };
            SimpleDelegate.prototype.apply = function (args) {
                if (this._method) {
                    return this._method.apply(this._caller, args);
                }
                return null;
            };
            return SimpleDelegate;
        }());
        utils.SimpleDelegate = SimpleDelegate;
    })(utils = asgard.utils || (asgard.utils = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=SimpleDelegate.js.map