var asgard;
(function (asgard) {
    var utils;
    (function (utils) {
        var Vector2 = /** @class */ (function () {
            function Vector2(x, y) {
                this.x = 0.0;
                this.y = 0.0;
                this.x = x;
                this.y = y;
            }
            return Vector2;
        }());
        utils.Vector2 = Vector2;
        var Vector3 = /** @class */ (function () {
            function Vector3(x, y, z) {
                this.x = 0.0;
                this.y = 0.0;
                this.z = 0.0;
                this.x = x;
                this.y = y;
                this.z = z;
            }
            return Vector3;
        }());
        utils.Vector3 = Vector3;
    })(utils = asgard.utils || (asgard.utils = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=Vector.js.map