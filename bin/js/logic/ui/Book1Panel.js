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
    var Book1Panel = /** @class */ (function (_super) {
        __extends(Book1Panel, _super);
        function Book1Panel(name) {
            var _this = _super.call(this, logic.GameConst.APP_NAME, name) || this;
            _this.timeLine = new TimeLine();
            return _this;
        }
        Book1Panel.prototype.createView = function () {
            return this._curUI = new ui.book1UI();
        };
        Book1Panel.prototype.getDependenceRes = function () {
            return [];
        };
        Book1Panel.prototype.onInit = function () {
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
        Book1Panel.prototype.bgOn = function () {
            this._curUI.mus_on.visible = false;
            this._curUI.mus_off.visible = true;
            logic.SoundManager.playMusic("sound/bgmusic.mp3");
        };
        Book1Panel.prototype.bgOff = function () {
            this._curUI.mus_on.visible = true;
            this._curUI.mus_off.visible = false;
            logic.SoundManager.stopMusic();
        };
        Book1Panel.prototype.next = function () {
            var gs = asgard.stage.StageManager.CurStage(logic.GameConst.APP_NAME);
            gs.next("book2");
        };
        Book1Panel.prototype.onShow = function () {
            this._curUI.box.y = 1280;
            Laya.Tween.to(this._curUI.box, { y: 0 }, 1000, null, Laya.Handler.create(this, this.onComplete));
        };
        Book1Panel.prototype.onHide = function () {
            console.log("111");
        };
        Book1Panel.prototype.onComplete = function () {
            Laya.Tween.to(this._curUI.i0, { x: 720 }, 2000, null, Laya.Handler.create(this, this.onI0Complete));
            Laya.Tween.to(this._curUI.i1, { x: -1000 }, 2000, null, Laya.Handler.create(this, this.onI1Complete));
        };
        Book1Panel.prototype.onI0Complete = function () {
            Laya.Tween.to(this._curUI.i2, { x: -1000 }, 2000, null, Laya.Handler.create(this, this.onI2Complete));
        };
        Book1Panel.prototype.onI1Complete = function () {
            Laya.Tween.to(this._curUI.i3, { x: 720 }, 2000, null, Laya.Handler.create(this, this.onI3Complete));
        };
        Book1Panel.prototype.onI2Complete = function () {
            Laya.Tween.to(this._curUI.i4, { alpha: 1 }, 1000, null, Laya.Handler.create(this, this.onI4Complete));
        };
        Book1Panel.prototype.onI3Complete = function () {
        };
        Book1Panel.prototype.onI4Complete = function () {
        };
        Book1Panel.prototype.dispose = function () {
        };
        Book1Panel.prototype.onFrame = function (time, delta) {
            this._curUI.star1.rotation += 2;
            this._curUI.star2.rotation += 0.5;
            this._curUI.star3.rotation += 0.5;
            this._curUI.star4.rotation += 1;
        };
        return Book1Panel;
    }(asgard.ui.BaseUIPanel));
    logic.Book1Panel = Book1Panel;
})(logic || (logic = {}));
//# sourceMappingURL=Book1Panel.js.map