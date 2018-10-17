var asgard;
(function (asgard) {
    var net;
    (function (net) {
        var SimpleHttp = /** @class */ (function () {
            function SimpleHttp() {
            }
            Object.defineProperty(SimpleHttp.prototype, "Status", {
                get: function () {
                    return this._status;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SimpleHttp.prototype, "ResponseText", {
                get: function () {
                    return this._responseText;
                },
                enumerable: true,
                configurable: true
            });
            SimpleHttp.prototype.postRequest = function (url, postdata, caller, callback, timeout, headers) {
                if (timeout === void 0) { timeout = 10000; }
                if (!url)
                    return;
                this._taskHandler = new asgard.utils.SimpleDelegate(caller, callback);
                this._http = new Laya.HttpRequest();
                this._http.http.timeout = timeout;
                this._http.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
                this._http.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
                this._http.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                this._http.send(url, postdata, "post", "text", headers);
            };
            SimpleHttp.prototype.getRequest = function (url, caller, callback, timeout) {
                if (timeout === void 0) { timeout = 10000; }
                if (!url)
                    return;
                this._taskHandler = new asgard.utils.SimpleDelegate(caller, callback);
                this._http = new Laya.HttpRequest();
                this._http.http.timeout = timeout;
                this._http.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
                this._http.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
                this._http.once(Laya.Event.ERROR, this, this.onHttpRequestError);
                this._http.send(url, null, "get", "text");
            };
            SimpleHttp.prototype.onHttpRequestError = function (e) {
                this._status = -1;
                this._responseText = e;
                this._notifyHandle();
            };
            SimpleHttp.prototype.onHttpRequestProgress = function (e) {
                console.log("http precess " + e);
            };
            SimpleHttp.prototype.onHttpRequestComplete = function (e) {
                this._status = 0;
                this._responseText = this._http.data;
                console.log(this._responseText);
                this._notifyHandle();
            };
            SimpleHttp.prototype._notifyHandle = function () {
                if (this._taskHandler) {
                    this._taskHandler.apply([this._responseText, this._status]);
                }
            };
            return SimpleHttp;
        }());
        net.SimpleHttp = SimpleHttp;
    })(net = asgard.net || (asgard.net = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=SimpleHttp.js.map