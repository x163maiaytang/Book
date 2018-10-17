var asgard;
(function (asgard) {
    var utils;
    (function (utils) {
        var Int64 = /** @class */ (function () {
            function Int64(low, high) {
                if (low === void 0) { low = 0; }
                if (high === void 0) { high = 0; }
                this.low = 0;
                this.high = 0;
                this.low = low;
                this.high = high;
            }
            Int64.prototype.equal = function (v) {
                if (v)
                    return (v.low == this.low) && (v.high == this.high);
                else
                    return false;
            };
            Int64.prototype.isZero = function () {
                return this.low == 0 && this.high == 0;
            };
            Int64.prototype.toString = function () {
                return "high:0x" + this.high.toString(16) + " low:0x" + this.low.toString(16);
            };
            return Int64;
        }());
        utils.Int64 = Int64;
    })(utils = asgard.utils || (asgard.utils = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=Int64.js.map