var asgard;
(function (asgard) {
    var ui;
    (function (ui) {
        var BaseUIPanel = /** @class */ (function () {
            function BaseUIPanel(appname, name) {
                this._appName = appname;
                this._name = name;
                this._resReady = false;
            }
            BaseUIPanel.prototype.getAppName = function () {
                return this._appName;
            };
            BaseUIPanel.prototype.getName = function () {
                return this._name;
            };
            BaseUIPanel.prototype.getView = function () {
                if (this._uiView) {
                    this._lastUiView = this._uiView;
                }
                // 关闭缓存 hxb
                // if(!this._uiView)
                // {
                this._uiView = this.createView();
                if (this._uiView) {
                    this._uiView.name = this._name;
                    this.onInit();
                    ui.UIManager.addUIView(this._uiView);
                }
                // }
                return this._uiView;
            };
            BaseUIPanel.prototype.isVisible = function () {
                return this._visible;
            };
            BaseUIPanel.prototype.isResReady = function () {
                return this._resReady;
            };
            BaseUIPanel.prototype.getDependenceRes = function () {
                return null;
            };
            BaseUIPanel.prototype.createView = function () {
                return null;
            };
            BaseUIPanel.prototype._prepareRes = function () {
                if (!this._resReady) {
                    var depRes = this.getDependenceRes();
                    if (depRes && depRes.length > 0) {
                        Laya.loader.load(depRes, Laya.Handler.create(this, this.onResLoaded));
                    }
                    else {
                        this.onResLoaded();
                    }
                }
                else {
                    this._doShow();
                }
            };
            BaseUIPanel.prototype.prepareView = function () {
                this._visible = false;
                this._prepareRes();
            };
            BaseUIPanel.prototype.openView = function () {
                this._visible = true;
                this._prepareRes();
            };
            BaseUIPanel.prototype.closeView = function (remove) {
                this._visible = false;
                this._uiView.visible = false;
                this.onHide();
                if (remove && this._uiView) {
                    this._uiView.removeSelf();
                    // this._uiView.destroy();
                }
            };
            BaseUIPanel.prototype.onResLoaded = function () {
                this._resReady = true;
                this.onPrepared();
                if (!this._visible) {
                    return;
                }
                this._doShow();
            };
            BaseUIPanel.prototype._doShow = function () {
                var uiview = this.getView();
                if (this._visible && uiview) {
                    uiview.visible = true;
                    this.onShow();
                    ui.UIManager.addUIView(uiview);
                }
            };
            BaseUIPanel.prototype.onFrame = function (time, delta) {
            };
            BaseUIPanel.prototype.onInit = function () {
            };
            BaseUIPanel.prototype.onPrepared = function () {
            };
            BaseUIPanel.prototype.onShow = function () {
            };
            BaseUIPanel.prototype.onHide = function () {
            };
            BaseUIPanel.prototype.dispose = function () {
            };
            BaseUIPanel.prototype.onShowComplete = function () {
            };
            return BaseUIPanel;
        }());
        ui.BaseUIPanel = BaseUIPanel;
    })(ui = asgard.ui || (asgard.ui = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=BaseUIPanel.js.map