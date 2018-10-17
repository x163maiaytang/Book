var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var logic;
(function (logic) {
    var LoadingPanel = /** @class */ (function (_super) {
        __extends(LoadingPanel, _super);
        function LoadingPanel(name) {
            return _super.call(this, logic.GameConst.APP_NAME, name) || this;
        }
        LoadingPanel.prototype.createView = function () {
            if (!this._curUI) {
                this._curUI = new ui.loadingUI();
            }
            return this._curUI;
        };
        LoadingPanel.prototype.getDependenceRes = function () {
            return [
                { url: "comp/progress_loading.png", type: Laya.Loader.IMAGE },
                { url: "comp/progress_loading$bar.png", type: Laya.Loader.IMAGE },
            ];
        };
        LoadingPanel.prototype.onInit = function () {
        };
        LoadingPanel.prototype.getRes = function () {
            return [
                { url: "sound/bgmusic.mp3", type: Laya.Loader.SOUND },
                { url: "book/1.jpg", type: Laya.Loader.IMAGE },
                { url: "book/2.jpg", type: Laya.Loader.IMAGE },
                { url: "book/3.jpg", type: Laya.Loader.IMAGE },
                { url: "book/4.jpg", type: Laya.Loader.IMAGE },
                { url: "book/5.jpg", type: Laya.Loader.IMAGE },
                { url: "book/6.jpg", type: Laya.Loader.IMAGE },
                { url: "book/7.jpg", type: Laya.Loader.IMAGE },
                { url: "book/8.jpg", type: Laya.Loader.IMAGE },
                { url: "book/9.jpg", type: Laya.Loader.IMAGE },
                { url: "book/10.jpg", type: Laya.Loader.IMAGE },
                { url: "book/11.jpg", type: Laya.Loader.IMAGE },
                { url: "book/12.jpg", type: Laya.Loader.IMAGE },
                { url: "book/13.jpg", type: Laya.Loader.IMAGE },
                { url: "book/14.jpg", type: Laya.Loader.IMAGE },
                { url: "book/15.jpg", type: Laya.Loader.IMAGE },
                { url: "book/bg.png", type: Laya.Loader.IMAGE },
                { url: "book/i0.jpg", type: Laya.Loader.IMAGE },
                { url: "book/i1.jpg", type: Laya.Loader.IMAGE },
                { url: "book/i2.jpg", type: Laya.Loader.IMAGE },
                { url: "book/i3.jpg", type: Laya.Loader.IMAGE },
                { url: "book/i4.jpg", type: Laya.Loader.IMAGE },
                { url: "res/atlas/comp.atlas", type: Laya.Loader.ATLAS },
            ];
        };
        LoadingPanel.prototype.onShow = function () {
            Laya.loader.load(this.getRes(), Laya.Handler.create(this, this.onLoaded), Laya.Handler.create(this, this.onLoadSchedule, null, false));
        };
        LoadingPanel.prototype.onLoadSchedule = function (data) {
            console.log("进度： " + data);
            this._curUI.progress.value = data;
            var i = data;
            this._curUI.num.text = Math.floor(i * 100) + "";
        };
        LoadingPanel.prototype.onLoaded = function (data) {
            if (!data)
                return;
            asgard.stage.StageManager.enterStage(logic.GameConst.APP_NAME, logic.StageType.STAGE_GAME);
        };
        LoadingPanel.prototype.onHide = function () {
        };
        LoadingPanel.prototype.dispose = function () {
        };
        return LoadingPanel;
    }(asgard.ui.BaseUIPanel));
    logic.LoadingPanel = LoadingPanel;
})(logic || (logic = {}));
//# sourceMappingURL=LoadingPanel.js.map