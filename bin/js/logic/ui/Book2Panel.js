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
    var Book2Panel = /** @class */ (function (_super) {
        __extends(Book2Panel, _super);
        function Book2Panel(name) {
            var _this = _super.call(this, logic.GameConst.APP_NAME, name) || this;
            _this.timeLine = new TimeLine();
            _this.pageIndex = 15;
            _this.orderNum = 15;
            return _this;
        }
        Book2Panel.prototype.createView = function () {
            return this._curUI = new ui.book2UI();
        };
        Book2Panel.prototype.getDependenceRes = function () {
            return [];
        };
        Book2Panel.prototype.onInit = function () {
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
            for (var index = 15; index > 0; index--) {
                var page = new Laya.Sprite();
                page.loadImage("book/" + index + ".jpg", 0, 0);
                this._curUI.container.addChild(page);
            }
            for (var index = 14; index >= 0; index--) {
                var page = this._curUI.container.getChildAt(index);
                ;
                page.x = this._curUI.container.width / 2;
                page.pivotY = page.height / 2;
                if (index % 2 != 0) {
                    page.skewY = -180;
                    page.x = this._curUI.container.width / 2;
                    page.pivotX = page.width;
                    page.x = this._curUI.container.width / 2;
                }
            }
        };
        Book2Panel.prototype.bgOn = function () {
            this._curUI.mus_on.visible = false;
            this._curUI.mus_off.visible = true;
            logic.SoundManager.playMusic("sound/bgmusic.mp3");
        };
        Book2Panel.prototype.bgOff = function () {
            this._curUI.mus_on.visible = true;
            this._curUI.mus_off.visible = false;
            logic.SoundManager.stopMusic();
        };
        Book2Panel.prototype.next = function () {
            var gs = asgard.stage.StageManager.CurStage(logic.GameConst.APP_NAME);
            gs.next("end");
        };
        Book2Panel.prototype.onShow = function () {
            this._curUI.box.y = 1280;
            Laya.Tween.to(this._curUI.box, { y: 0 }, 1000, null, Laya.Handler.create(this, this.onComplete));
        };
        Book2Panel.prototype.onHide = function () {
            console.log("111");
        };
        Book2Panel.prototype.onComplete = function () {
            this.onPageComplete();
            var gs = asgard.stage.StageManager.CurStage(logic.GameConst.APP_NAME);
            gs.closeLast();
        };
        Book2Panel.prototype.havePage = function (index) {
            return index >= 0 && index < 15;
        };
        Book2Panel.prototype.onPageComplete = function () {
            this.pageIndex--;
            if (this.pageIndex > 0) {
                this.orderNum++;
                var page = this._curUI.container.getChildAt(this.pageIndex);
                page.zOrder += Math.pow(this.orderNum, 2);
                Laya.Tween.to(page, { skewY: -180 }, 2000, null, null);
            }
            this.pageIndex--;
            if (this.pageIndex > 0) {
                // this.orderNum ++;
                var page = this._curUI.container.getChildAt(this.pageIndex);
                //    page.zOrder += Math.pow(this.orderNum, 2);
                Laya.Tween.to(page, { skewY: -270 }, 1000, null, Laya.Handler.create(this, this.onPageHalfComplete));
            }
        };
        Book2Panel.prototype.onPageHalfComplete = function () {
            this.orderNum++;
            var page = this._curUI.container.getChildAt(this.pageIndex);
            page.zOrder += Math.pow(this.orderNum, 2);
            Laya.Tween.to(page, { skewY: -360 }, 1000, null, Laya.Handler.create(this, this.onPageComplete));
            logic.SoundManager.playSound("sound/flipsound.ogg");
        };
        Book2Panel.prototype.onFrame = function (time, delta) {
            this._curUI.star1.rotation += 2;
            this._curUI.star2.rotation += 0.5;
            this._curUI.star3.rotation += 0.5;
            this._curUI.star4.rotation += 1;
        };
        return Book2Panel;
    }(asgard.ui.BaseUIPanel));
    logic.Book2Panel = Book2Panel;
})(logic || (logic = {}));
//# sourceMappingURL=Book2Panel.js.map