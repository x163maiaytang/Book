var asgard;
(function (asgard) {
    var message;
    (function (message) {
        var BaseMessage = /** @class */ (function () {
            function BaseMessage() {
                this._connectionFlag = 1;
            }
            BaseMessage.prototype.getreturnMsg = function () {
                return this.returnMsg;
            };
            BaseMessage.prototype.setConnectionFlag = function (connectionFlag) {
                this._connectionFlag = connectionFlag;
            };
            Object.defineProperty(BaseMessage.prototype, "connectionFlag", {
                get: function () {
                    return this._connectionFlag;
                },
                enumerable: true,
                configurable: true
            });
            BaseMessage.prototype.encode = function () {
                this._bytes = new laya.utils.Byte();
                this._bytes.endian = Laya.Byte.BIG_ENDIAN;
                this.onEncode();
                return this._bytes;
            };
            BaseMessage.prototype.decode = function (byteArray) {
                // 读取消息数据
                this._bytes = byteArray;
                this.onDecode();
            };
            BaseMessage.prototype.getByteArray = function () {
                return this._bytes;
            };
            //	abstract excute():void;
            BaseMessage.prototype.onEncode = function () {
            };
            BaseMessage.prototype.onDecode = function () {
            };
            /*
             * 写入数据区域
             */
            BaseMessage.prototype.writeBoolean = function (data) {
                // 可能有数据反转的问题
                if (data == true)
                    this._bytes.writeByte(1);
                else
                    this._bytes.writeByte(0);
            };
            BaseMessage.prototype.writeByte = function (data) {
                this._bytes.writeByte(data);
            };
            BaseMessage.prototype.writeShort = function (data) {
                this._bytes.writeInt16(data);
            };
            BaseMessage.prototype.writeInt = function (data) {
                this._bytes.writeInt32(data);
            };
            BaseMessage.prototype.writeLong = function (data) {
                this._bytes.writeInt32(data);
            };
            BaseMessage.prototype.writeFloat = function (data) {
                this._bytes.writeFloat32(data);
            };
            BaseMessage.prototype.writeDouble = function (data) {
                this._bytes.writeFloat64(data);
            };
            BaseMessage.prototype.writeString = function (data) {
                this._bytes.writeUTFString(data);
            };
            /*
            * 写入数据区域
            */
            BaseMessage.prototype.readBoolean = function () {
                return (this._bytes.getByte() > 0.1);
            };
            BaseMessage.prototype.readByte = function () {
                return this._bytes.getByte();
            };
            BaseMessage.prototype.readShort = function () {
                return this._bytes.getInt16();
            };
            BaseMessage.prototype.readInt = function () {
                return this._bytes.getInt32();
            };
            BaseMessage.prototype.readInt64 = function () {
                var lowV = this._bytes.getInt32();
                var highV = this._bytes.getInt32();
                return new asgard.utils.Int64(lowV, highV);
            };
            BaseMessage.prototype.readFloat = function () {
                return this._bytes.getFloat32();
            };
            BaseMessage.prototype.readDouble = function () {
                return this._bytes.getFloat64();
            };
            BaseMessage.prototype.readString = function () {
                return this._bytes.getUTFString();
            };
            BaseMessage.prototype.toString = function () {
                return "";
            };
            return BaseMessage;
        }());
        message.BaseMessage = BaseMessage;
    })(message = asgard.message || (asgard.message = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=BaseMessage.js.map