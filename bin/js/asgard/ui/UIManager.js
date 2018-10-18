var asgard;
(function (asgard) {
    var ui;
    (function (ui) {
        var UIManager = /** @class */ (function () {
            function UIManager() {
            }
            UIManager.init = function (uifactory) {
                UIManager._Bkg_Root = new Laya.Sprite();
                Laya.stage.addChild(UIManager._Bkg_Root);
                UIManager._Game_Root = new Laya.Sprite();
                Laya.stage.addChild(UIManager._Game_Root);
                UIManager._UI_Root = new Laya.Sprite();
                Laya.stage.addChild(UIManager._UI_Root);
                UIManager._Tip_Root = new Laya.Sprite();
                Laya.stage.addChild(UIManager._Tip_Root);
                if (UIManager._uiPanels.length > 0) {
                    UIManager._uiPanels.splice(0, UIManager._uiPanels.length);
                }
                if (uifactory && UIManager._uifactory.indexOf(uifactory.getAppName()) < 0) {
                    UIManager._uifactory.set(uifactory.getAppName(), uifactory);
                }
            };
            UIManager.addBkgView = function (view) {
                if (view) {
                    UIManager._Bkg_Root.addChild(view);
                }
            };
            UIManager.addGameView = function (view) {
                if (view) {
                    UIManager._Game_Root.addChild(view);
                }
            };
            UIManager.addUIView = function (view) {
                if (view) {
                    UIManager._UI_Root.addChild(view);
                }
            };
            UIManager.addTipView = function (view) {
                if (view) {
                    UIManager._Tip_Root.addChild(view);
                }
            };
            UIManager.findUIPanel = function (appname, uiname) {
                var fuipanel = null;
                for (var _i = 0, _a = UIManager._uiPanels; _i < _a.length; _i++) {
                    var uipanel = _a[_i];
                    if (uipanel && uipanel.getName() == uiname && uipanel.getAppName() == appname) {
                        fuipanel = uipanel;
                    }
                }
                return fuipanel;
            };
            UIManager.openView = function (appname, viewname) {
                var uiView = UIManager.findUIPanel(appname, viewname);
                if (!uiView) {
                    var uifactory = UIManager._uifactory.get(appname);
                    if (uifactory) {
                        uiView = uifactory.getUI(viewname);
                        if (uiView) {
                            UIManager._uiPanels.push(uiView);
                        }
                    }
                }
                if (uiView) {
                    uiView.openView();
                }
                return uiView;
            };
            UIManager.prepareView = function (appname, viewname) {
                var uiView = UIManager.findUIPanel(appname, viewname);
                if (!uiView) {
                    var uifactory = UIManager._uifactory.get(appname);
                    if (uifactory) {
                        uiView = uifactory.getUI(viewname);
                        if (uiView) {
                            UIManager._uiPanels.push(uiView);
                        }
                    }
                }
                if (uiView) {
                    uiView.prepareView();
                }
                return uiView;
            };
            UIManager.closeView = function (appname, uiname) {
                // let uiView:BaseUIPanel=UIManager.findUIPanel(appname,viewname);
                var removeIndex = -1;
                var uiView = null;
                var index = 0;
                for (var _i = 0, _a = UIManager._uiPanels; _i < _a.length; _i++) {
                    var uipanel = _a[_i];
                    if (uipanel && uipanel.getName() == uiname && uipanel.getAppName() == appname) {
                        uiView = uipanel;
                        removeIndex = index;
                        break;
                    }
                    index++;
                }
                if (removeIndex > -1) {
                    UIManager._uiPanels.splice(removeIndex, 1);
                }
                console.log(UIManager._uiPanels.length + "==========");
                if (uiView) {
                    uiView.closeView(true);
                }
            };
            UIManager.onFrame = function (time, delta) {
                for (var _i = 0, _a = UIManager._uiPanels; _i < _a.length; _i++) {
                    var uipanel = _a[_i];
                    if (uipanel && uipanel.isVisible()) {
                        uipanel.onFrame(time, delta);
                    }
                }
            };
            UIManager._uifactory = new Laya.Dictionary();
            UIManager._uiPanels = new Array();
            return UIManager;
        }());
        ui.UIManager = UIManager;
    })(ui = asgard.ui || (asgard.ui = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=UIManager.js.map