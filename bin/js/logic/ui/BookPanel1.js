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
    var BookPanel1 = /** @class */ (function (_super) {
        __extends(BookPanel1, _super);
        function BookPanel1(name) {
            var _this = _super.call(this, logic.GameConst.APP_NAME, name) || this;
            _this.timeLine = new TimeLine();
            return _this;
        }
        BookPanel1.prototype.createView = function () {
            if (!this._curUI) {
                this._curUI = new ui.book1UI();
            }
            return this._curUI;
        };
        BookPanel1.prototype.getDependenceRes = function () {
            return [];
        };
        BookPanel1.prototype.onInit = function () {
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
        BookPanel1.prototype.bgOn = function () {
            this._curUI.mus_on.visible = false;
            this._curUI.mus_off.visible = true;
            logic.SoundManager.playMusic("sound/bgmusic.mp3");
        };
        BookPanel1.prototype.bgOff = function () {
            this._curUI.mus_on.visible = true;
            this._curUI.mus_off.visible = false;
            logic.SoundManager.stopMusic();
        };
        BookPanel1.prototype.next = function () {
            var gs = asgard.stage.StageManager.CurStage(logic.GameConst.APP_NAME);
            gs.next("book1");
        };
        BookPanel1.prototype.onShow = function () {
        };
        BookPanel1.prototype.onHide = function () {
        };
        BookPanel1.prototype.dispose = function () {
        };
        BookPanel1.prototype.onFrame = function (time, delta) {
            this._curUI.star1.rotation += 2;
            this._curUI.star2.rotation += 0.5;
            this._curUI.star3.rotation += 0.5;
            this._curUI.star4.rotation += 1;
        };
        return BookPanel1;
    }(asgard.ui.BaseUIPanel));
    logic.BookPanel1 = BookPanel1;
})(logic || (logic = {}));
//# sourceMappingURL=BookPanel1.js.map