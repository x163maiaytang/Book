var asgard;
(function (asgard) {
    var utils;
    (function (utils) {
        var MathUtils = /** @class */ (function () {
            function MathUtils() {
            }
            MathUtils.shuffle = function (objects, num) {
                var size = objects.length;
                var index0;
                var index1;
                var temp;
                if (num == -1)
                    num = size;
                for (var i = 0; i < num; i++) {
                    index0 = Math.random() * size;
                    index1 = Math.random() * size;
                    if (index0 == index1)
                        continue;
                    //交换
                    temp = objects[index0];
                    objects[index0] = objects[index1];
                    objects[index1] = temp;
                }
                return objects;
            };
            MathUtils.sqrt = function (w) {
                var b = w * 0.25;
                var a, c;
                do {
                    c = w / b;
                    b = (b + c) * 0.5;
                    a = b - c;
                    if (a < 0)
                        a = -a;
                } while (a > 0.00001);
                return b;
            };
            //****************************
            /**
             * 有效偏移判断
             *
             * @param p1x
             * @param p1y
             * @param p2x
             * @param p2y
             * @param scopex
             * @param scopey
             * @return
             */
            MathUtils.inScope = function (p1x, p1y, p2x, p2y, scopex, scopey) {
                return (Math.abs(p1x - p2x) < scopex && Math.abs(p1y - p2y) < scopey);
            };
            /**
             * 两点之间快速距离计算
             *
             * @param p1x
             * @param p1y
             * @param p2x
             * @param p2y
             * @return
             */
            MathUtils.fastApproxDistance = function (p1x, p1y, p2x, p2y) {
                p1x = (p1x > p2x) ? (p1x - p2x) : (p2x - p1x);
                p1y = (p1y > p2y) ? (p1y - p2y) : (p2y - p1y);
                return (p1x > p1y) ? (p1x + 0.43 * p1y) : (p1y + 0.43 * p1x);
            };
            /**
             * 两点之间快速距离计算
             *
             * @param p1x
             * @param p1y
             * @param p2x
             * @param p2y
             * @return
             */
            MathUtils.fastApproxDeltaDistance = function (deltax, deltay) {
                deltax = (deltax > 0) ? deltax : -deltax;
                deltay = (deltay > 0) ? deltay : -deltay;
                return (deltax > deltay) ? (deltax + 0.43 * deltay) : (deltay + 0.43 * deltax);
            };
            /**
             * 计算atan2角度
             *
             * @param deltax
             * @param deltay
             * @return
             */
            MathUtils.atan2 = function (deltax, deltay) {
                if (Math.abs(deltax) > MathUtils.EPSILON)
                    return Math.atan2(deltay, deltax);
                else {
                    if (deltay > 0)
                        return MathUtils.HALF_PI;
                    else
                        return -MathUtils.HALF_PI;
                }
            };
            MathUtils.LerpFloat = function (from, to, factor) {
                if (factor < 0)
                    return from;
                else if (factor >= 1.0)
                    return to;
                else
                    return from + (to - from) * factor;
            };
            MathUtils.lerp = function (current, to, speed, deltaTime) {
                if (current - to > MathUtils.EPSILON || to - current > MathUtils.EPSILON) {
                    deltaTime = speed * deltaTime;
                    if (to > current) {
                        if (deltaTime > 0)
                            current += deltaTime;
                        else
                            current -= deltaTime;
                        if (to - current < MathUtils.EPSILON)
                            current = to;
                    }
                    else {
                        if (deltaTime > 0)
                            current -= deltaTime;
                        else
                            current += deltaTime;
                        if (current - to < MathUtils.EPSILON)
                            current = to;
                    }
                }
                return current;
            };
            MathUtils.lerpDelta = function (current, to, delta) {
                if (current - to > MathUtils.EPSILON || to - current > MathUtils.EPSILON) {
                    if (to > current) {
                        if (delta > 0)
                            current += delta;
                        else
                            current -= delta;
                        if (to - current < MathUtils.EPSILON)
                            current = to;
                    }
                    else {
                        if (delta > 0)
                            current -= delta;
                        else
                            current += delta;
                        if (current - to < MathUtils.EPSILON)
                            current = to;
                    }
                }
                return current;
            };
            MathUtils.regularDirection = function (direction) {
                if (direction >= MathUtils.TWO_PI) {
                    while (direction >= MathUtils.TWO_PI) {
                        direction -= MathUtils.TWO_PI;
                    }
                }
                else if (direction < 0) {
                    while (direction < 0) {
                        direction += MathUtils.TWO_PI;
                    }
                }
                return direction;
            };
            MathUtils.approximately = function (f1, f2) {
                return (Math.abs(f1 - f2) < MathUtils.EPSILON);
            };
            MathUtils.approximatelyVector3 = function (v3, px, py, pz) {
                return (Math.abs(v3.x - px) < MathUtils.EPSILON &&
                    Math.abs(v3.y - py) < MathUtils.EPSILON &&
                    Math.abs(v3.z - pz) < MathUtils.EPSILON);
            };
            MathUtils.copyVector3 = function (src, target) {
                if (src && target) {
                    target.x = src.x;
                    target.y = src.y;
                    target.z = src.z;
                }
            };
            MathUtils.exportVector3Log = function (src) {
                console.log("vector3 x=" + src.x + ",y=" + src.y + ",z=" + src.z);
            };
            MathUtils.approaching = function (curv, targetv, step) {
                if (step < 0) {
                    step = -step;
                }
                if (targetv > curv) {
                    curv += step;
                    if (Math.abs(curv - targetv) < MathUtils.EPSILON) {
                        curv = targetv;
                    }
                }
                else if (targetv < curv) {
                    curv -= step;
                    if (Math.abs(curv - targetv) < MathUtils.EPSILON) {
                        curv = targetv;
                    }
                }
                return curv;
            };
            MathUtils.EPSILON = 0.00001;
            MathUtils.Rad2Deg = 180 / Math.PI;
            MathUtils.Deg2Rad = Math.PI / 180;
            MathUtils.PI = Math.PI;
            MathUtils.TWO_PI = 2.0 * Math.PI;
            MathUtils.HALF_PI = 0.5 * Math.PI;
            MathUtils.ONE_HALF_PI = 1.5 * Math.PI;
            return MathUtils;
        }());
        utils.MathUtils = MathUtils;
    })(utils = asgard.utils || (asgard.utils = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=MathUtils.js.map