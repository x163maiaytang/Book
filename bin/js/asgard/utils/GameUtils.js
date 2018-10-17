var asgard;
(function (asgard) {
    var utils;
    (function (utils) {
        var GameUtil = /** @class */ (function () {
            function GameUtil() {
            }
            GameUtil.findChildNodeByName = function (childName, rootNode, recrusion) {
                if (recrusion === void 0) { recrusion = false; }
                if (!childName || !rootNode)
                    return null;
                if (!recrusion)
                    return rootNode.getChildByName(childName);
                else {
                    //此处暂时使用深度优先策略
                    var resultNode = null;
                    for (var i = 0; !resultNode && i < rootNode.numChildren; i++) {
                        var subNode = rootNode.getChildAt(i);
                        if (subNode.name == childName) {
                            resultNode = subNode;
                        }
                        else {
                            resultNode = GameUtil.findChildNodeByName(childName, subNode, recrusion);
                        }
                    }
                    return resultNode;
                }
            };
            GameUtil.fineNumber = function (v) {
                if (!v || v < 0)
                    return "0";
                if (v < 900)
                    return Math.floor(v).toFixed(0);
                if (v < 100000) {
                    v = v * 0.001;
                    return v.toFixed(2) + "K";
                }
                else if (v < 900000) {
                    v = v * 0.001;
                    return v.toFixed(1) + "k";
                }
                else if (v < 100000000) {
                    v = v * 0.000001;
                    return v.toFixed(2) + "M";
                }
                else if (v < 900000000) {
                    v = v * 0.000001;
                    return v.toFixed(1) + "M";
                }
                else {
                    v = v * 0.000000001;
                    return v.toFixed(2) + "G";
                }
            };
            GameUtil.fixedFormat = function (v, length) {
                var str = (v) ? v.toString() : "";
                while (str.length < length) {
                    str = "0" + str;
                }
                return str;
            };
            GameUtil.catchUrlImage = function (imgurl, w, h, callback) {
                var catchSprite = new Laya.Sprite();
                catchSprite.loadImage(imgurl, 0, 0, w, h);
                var h2 = new Laya.Handler();
                var htmlC = catchSprite.drawToCanvas(w, h, 0, 0);
                htmlC.toBase64("image/png", 0.92, callback);
            };
            GameUtil.dateOfDay = function (date) {
                return Math.floor(date.getTime() / 86400000);
            };
            GameUtil.weekdayOfDay = function (date) {
                return Math.floor(date.getTime() / 604800000);
            };
            GameUtil.dateOfDay2 = function (date) {
                return Math.floor(date.getTime() / 86400000) - GameUtil._zeroDate;
            };
            GameUtil.dayOfDate = function (day) {
                var date = new Date();
                date.setTime((day + GameUtil._zeroDate + 1) * 86400000);
                return date;
            };
            GameUtil.dateStrOfDate = function (date) {
                var curDay = asgard.utils.GameUtil.dayOfDate(date);
                var year = curDay.getFullYear();
                var month = curDay.getMonth() + 1;
                var day = curDay.getDate();
                return year + "/" + month + "/" + day;
            };
            GameUtil.formatTime = function (secondtime) {
                if (secondtime > 3600000) {
                    var h = Math.floor(secondtime / 3600000);
                    var s = Math.floor((secondtime - h * 3600000) / 60000);
                    var m = Math.floor((secondtime - h * 3600000 - s * 60000) / 1000);
                    return asgard.utils.GameUtil.fixedFormat(h, 2) + ":" +
                        asgard.utils.GameUtil.fixedFormat(s, 2) + ":" +
                        asgard.utils.GameUtil.fixedFormat(m, 2);
                }
                else if (secondtime > 60000) {
                    var s = Math.floor(secondtime / 60000);
                    var m = Math.floor((secondtime - s * 60000) / 1000);
                    return asgard.utils.GameUtil.fixedFormat(s, 2) + ":" +
                        asgard.utils.GameUtil.fixedFormat(m, 2);
                }
                else {
                    var m = Math.floor(secondtime / 1000);
                    return "00:" + asgard.utils.GameUtil.fixedFormat(m, 2);
                }
            };
            GameUtil._zeroDate = Math.floor(new Date(2018, 0, 1, 0, 0, 0).getTime() / 86400000);
            return GameUtil;
        }());
        utils.GameUtil = GameUtil;
    })(utils = asgard.utils || (asgard.utils = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=GameUtils.js.map