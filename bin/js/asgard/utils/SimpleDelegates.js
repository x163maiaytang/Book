var asgard;
(function (asgard) {
    var utils;
    (function (utils) {
        var SimpleDelegates = /** @class */ (function () {
            function SimpleDelegates() {
                this._delegates = new Array();
            }
            SimpleDelegates.prototype.getCount = function () {
                return this._delegates.length;
            };
            SimpleDelegates.prototype.getItem = function (index) {
                if (index >= 0 && index < this._delegates.length)
                    return this._delegates[index];
                else
                    return null;
            };
            SimpleDelegates.prototype.tryAddDelegate = function (caller, process) {
                if (!caller || !process) {
                    return false;
                }
                var delg;
                var count = this._delegates.length;
                for (var i = 0; i < count; i++) {
                    delg = this._delegates[i];
                    if (delg && delg.isSameMethod(caller, process)) {
                        return false;
                    }
                }
                delg = new utils.SimpleDelegate(caller, process);
                this._delegates.push(delg);
            };
            SimpleDelegates.prototype.removeDelegate = function (caller, process) {
                if (!caller || !process) {
                    return;
                }
                var delgIndex = -1;
                var delg;
                var count = this._delegates.length;
                for (var i = 0; i < count && delgIndex < 0; i++) {
                    delg = this._delegates[i];
                    if (delg && delg.isSameMethod(caller, process)) {
                        delgIndex = i;
                    }
                }
                if (delgIndex >= 0) {
                    this._delegates.splice(delgIndex, 1);
                }
            };
            SimpleDelegates.prototype.invokeDelegate = function (arg) {
                var delg;
                var count = this._delegates.length;
                for (var i = 0; i < count; i++) {
                    delg = this._delegates[i];
                    if (delg) {
                        if (arg)
                            delg.apply(arg);
                        else
                            delg.apply();
                    }
                }
            };
            return SimpleDelegates;
        }());
        utils.SimpleDelegates = SimpleDelegates;
    })(utils = asgard.utils || (asgard.utils = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=SimpleDelegates.js.map