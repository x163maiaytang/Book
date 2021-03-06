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
    var TimeLine = Laya.TimeLine;
    var EndPanel = /** @class */ (function (_super) {
        __extends(EndPanel, _super);
        function EndPanel(name) {
            var _this = _super.call(this, logic.GameConst.APP_NAME, name) || this;
            _this.timeLine = new TimeLine();
            return _this;
        }
        EndPanel.prototype.createView = function () {
            return this._curUI = new ui.endUI();
        };
        EndPanel.prototype.getDependenceRes = function () {
            return [];
        };
        EndPanel.prototype.onInit = function () {
            this._curUI.mus_on.visible = false;
            this._curUI.mus_off.visible = true;
            this._curUI.mus_on.on(Laya.Event.CLICK, this, this.bgOn);
            this._curUI.mus_off.on(Laya.Event.CLICK, this, this.bgOff);
            this._curUI.next.on(Laya.Event.CLICK, this, this.next);
            var centerX = this._curUI.star1.width / 2;
            var centerY = this._curUI.star1.height / 2;
            this._curUI.star1.pivot(centerX, centerY);
            centerX = this._curUI.star2.width / 2;
            centerY = this._curUI.star2.height / 2;
            this._curUI.star2.pivot(centerX, centerY);
            centerX = this._curUI.star3.width / 2;
            centerY = this._curUI.star3.height / 2;
            this._curUI.star3.pivot(centerX, centerY);
            centerX = this._curUI.star4.width / 2;
            centerY = this._curUI.star4.height / 2;
            this._curUI.star4.pivot(centerX, centerY);
            this.timeLine.addLabel("up", 0).to(this._curUI.next, { x: 323, y: 1200 }, 1000, null, 0).addLabel("alpha", 0).to(this._curUI.next, { alpha: 0.1 }, 500, null, 0);
            this.timeLine.play(0, true);
        };
        EndPanel.prototype.bgOn = function () {
            this._curUI.mus_on.visible = false;
            this._curUI.mus_off.visible = true;
            logic.SoundManager.playMusic("sound/bgmusic.mp3");
        };
        EndPanel.prototype.bgOff = function () {
            this._curUI.mus_on.visible = true;
            this._curUI.mus_off.visible = false;
            logic.SoundManager.stopMusic();
        };
        EndPanel.prototype.next = function () {
            var gs = asgard.stage.StageManager.CurStage(logic.GameConst.APP_NAME);
            gs.init();
        };
        EndPanel.prototype.onShow = function () {
            this._curUI.box.y = 1280;
            Laya.Tween.to(this._curUI.box, { y: 0 }, 1000, null, Laya.Handler.create(this, this.onComplete));
            this._curUI.t.pos(222, 800)._zOrder = 10000;
            this._curUI.t.visible = true;
        };
        EndPanel.prototype.onHide = function () {
            console.log("111");
            if (this.qrcode) {
                Laya.Browser.document.body.removeChild(this.qrcode);
            }
        };
        EndPanel.prototype.onComplete = function () {
            var gs = asgard.stage.StageManager.CurStage(logic.GameConst.APP_NAME);
            gs.closeLast();
            this.qrcode = Laya.Browser.document.createElement("img");
            this.qrcode.style.position = "absolute"; //设置布局定位。这个不能少。
            this.qrcode.style.zIndex = 100; //设置层级
            this.qrcode.style.left = "150px";
            this.qrcode.style.top = "200px";
            this.qrcode.src = "comp/qrcode.png";
            Laya.Browser.document.body.appendChild(this.qrcode);
        };
        EndPanel.prototype.onI4Complete = function () {
        };
        EndPanel.prototype.dispose = function () {
        };
        EndPanel.prototype.onFrame = function (time, delta) {
            this._curUI.star1.rotation += 2;
            this._curUI.star2.rotation += 0.5;
            this._curUI.star3.rotation += 0.5;
            this._curUI.star4.rotation += 1;
        };
        return EndPanel;
    }(asgard.ui.BaseUIPanel));
    logic.EndPanel = EndPanel;
})(logic || (logic = {}));
//# sourceMappingURL=EndPanel.js.map