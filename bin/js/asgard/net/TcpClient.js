var asgard;
(function (asgard) {
    var net;
    (function (net) {
        var Browser = laya.utils.Browser;
        var TCPClient = /** @class */ (function () {
            function TCPClient() {
                this._events = new net.NetEvents();
                this.init();
                //TODO 时间紧迫 先放着
                //Laya.stage.on(Event.BLUR, this, this.onBlur);
                //Laya.stage.on(Event.VISIBILITY_CHANGE, this, this.onVisibilityReconnect);
            }
            TCPClient.prototype.registerEventListener = function (actionType, caller, listener) {
                this._events.registerEventListener(actionType, caller, listener);
            };
            TCPClient.prototype.unregisterEventListener = function (actionType) {
                this._events.unregisterEventListener(actionType);
            };
            TCPClient.prototype.onBlur = function () {
                console.log("失去焦点");
            };
            /**
             *切换状态
             *
             */
            TCPClient.prototype.onVisibilityReconnect = function () {
                console.log("可见性变化");
                if (Laya.stage.isVisibility) {
                    if (!this._socket.getConnected()) {
                        Browser.window.location.reload();
                    }
                }
            };
            TCPClient.prototype.init = function () {
                this._socket = new net.SimpleSocket();
                this._socket.setEvents(this._events);
            };
            TCPClient.prototype.connect = function (host, port) {
                if (!this._socket) {
                    this.init();
                }
                if (!this._socket.getConnected()) {
                    this._socket.connect(host, port);
                }
            };
            TCPClient.prototype.connectByUrl = function (url) {
                if (!this._socket) {
                    this.init();
                }
                if (!this._socket.getConnected()) {
                    this._socket.connectByUrl(url);
                }
            };
            Object.defineProperty(TCPClient.prototype, "connected", {
                get: function () {
                    return this._socket ? this._socket.getConnected() : false;
                },
                enumerable: true,
                configurable: true
            });
            TCPClient.prototype.sendMessages = function (cmd, body) {
                if (this._socket && this._socket.getConnected()) {
                    if (Laya.stage.isVisibility) {
                        this._socket.sendPackage(cmd, body);
                    }
                }
                else {
                    //炉钩子 暂时关闭重置连接
                    if (this._socket && this._socket.getConnected() == false) {
                        //					_socket.connect(ServerConst.ip, ServerConst.port);
                        //this.BrowserManager.refresh();				
                    }
                }
            };
            TCPClient.prototype.close = function () {
                if (this._socket && this._socket.getConnected()) {
                    this._socket.close();
                }
            };
            /**
             *  废掉socket，再使用重新创建
             *
             */
            TCPClient.prototype.unUseFul = function () {
                close();
                this._socket = null;
            };
            TCPClient.prototype.hadSocket = function () {
                if (this._socket) {
                    return true;
                }
                else {
                    return false;
                }
            };
            /**
             * 清空未解析完的消息
             * @return
             *
             */
            TCPClient.prototype.clearRecvArray = function () {
                if (this._socket) {
                    this._socket.clearRecvArray();
                }
            };
            /**
             * 子类MessageManager重写了此方法
             */
            TCPClient.prototype.onConnect = function () {
                this._events.connectedNotify();
            };
            /**
             * 子类MessageManager重写了此方法
             */
            TCPClient.prototype.onMessageReceived = function (messageType, bytes) {
                this._events.messageReceivedNotify(messageType, bytes);
            };
            /**
             * 处理链接断开
             */
            TCPClient.prototype.onDisConnect = function () {
                this.onLoseConnectionWithServer();
            };
            /**
             * 处理链接错误
             */
            TCPClient.prototype.onConnectError = function () {
                //lbw//LogManager.getInstance().printLog(LogLevel.DEBUG,"链接服务器失败IOError");
                //			PromptInfo.showContent(LocalManager.getString(337));
                this.showErrorMessageContent();
                this.receiveIOError();
                //MaskLoading.show(MaskLoadingType.LOSSCONNECT_WAIT);
            };
            /**
             * 处理数据链接IO错误
             */
            TCPClient.prototype.receiveIOError = function () {
                close();
                this.onLoseConnectionWithServer();
            };
            TCPClient.prototype.showErrorMessageContent = function () {
                // TODO 显示连接失败信息
                //PromptInfo.showContent(LocalManager.getString(337));
            };
            /**断开连接后*/
            TCPClient.prototype.onLoseConnectionWithServer = function () {
                if (Laya.stage.isVisibility) {
                    if (!this._socket.getConnected()) {
                        console.log("连接断开");
                        Browser.window.location.reload();
                    }
                }
            };
            return TCPClient;
        }());
        net.TCPClient = TCPClient;
    })(net = asgard.net || (asgard.net = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=TcpClient.js.map