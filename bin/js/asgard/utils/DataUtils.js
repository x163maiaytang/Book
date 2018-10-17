var asgard;
(function (asgard) {
    var utils;
    (function (utils) {
        var DataUtil = /** @class */ (function () {
            function DataUtil() {
            }
            DataUtil.readBoolean = function (indata) {
                return (indata.getByte() > 0.1);
            };
            DataUtil.readByte = function (indata) {
                return indata.getByte();
            };
            DataUtil.readShort = function (indata) {
                return indata.getInt16();
            };
            DataUtil.readInt = function (indata) {
                return indata.getInt32();
            };
            DataUtil.readInt64 = function (indata) {
                var lowV = indata.getInt32();
                var highV = indata.getInt32();
                return new asgard.utils.Int64(lowV, highV);
            };
            DataUtil.readFloat = function (indata) {
                return indata.getFloat32();
            };
            DataUtil.readDouble = function (indata) {
                return indata.getFloat64();
            };
            DataUtil.readString = function (indata) {
                return indata.getUTFString();
            };
            return DataUtil;
        }());
        utils.DataUtil = DataUtil;
    })(utils = asgard.utils || (asgard.utils = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=DataUtils.js.map