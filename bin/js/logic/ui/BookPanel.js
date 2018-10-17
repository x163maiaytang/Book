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
    var BookPanel = /** @class */ (function (_super) {
        __extends(BookPanel, _super);
        function BookPanel(name) {
            return _super.call(this, logic.GameConst.APP_NAME, name) || this;
        }
        BookPanel.prototype.createView = function () {
            if (!this._curUI) {
                this._curUI = new ui.bookUI();
            }
            return this._curUI;
        };
        BookPanel.prototype.getDependenceRes = function () {
            return [];
        };
        BookPanel.prototype.onInit = function () {
            //  AnimationManager.playAnimation(SpineRes.LOADING,this._curUI.waitDi_img);  //播放特效
            this.bgOn();
            this._curUI.on.on(Laya.Event.CLICK, this, this.bgOn);
            this._curUI.off.on(Laya.Event.CLICK, this, this.bgOff);
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
        };
        BookPanel.prototype.bgOn = function () {
            this._curUI.on.visible = false;
            this._curUI.off.visible = true;
            logic.SoundManager.playMusic("sound/bgmusic.mp3");
        };
        BookPanel.prototype.bgOff = function () {
            this._curUI.on.visible = true;
            this._curUI.off.visible = false;
            logic.SoundManager.stopMusic();
        };
        BookPanel.prototype.onShow = function () {
        };
        BookPanel.prototype.onHide = function () {
        };
        BookPanel.prototype.dispose = function () {
        };
        BookPanel.prototype.onFrame = function (time, delta) {
            this._curUI.star1.rotation += 2;
            this._curUI.star2.rotation += 0.5;
            this._curUI.star3.rotation += 0.5;
            this._curUI.star4.rotation += 1;
        };
        return BookPanel;
    }(asgard.ui.BaseUIPanel));
    logic.BookPanel = BookPanel;
})(logic || (logic = {}));
//# sourceMappingURL=BookPanel.js.map