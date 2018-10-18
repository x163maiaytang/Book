var logic;
(function (logic) {
    var BgElement = /** @class */ (function () {
        function BgElement() {
        }
        BgElement.onInit = function () {
            BgElement.star1.loadImage("comp/star1.png");
            // centerX = this._curUI.star2.width  / 2;
            // centerY = this._curUI.star2.height / 2;
            // this._curUI.star2.pivot(centerX, centerY);
            // centerX = this._curUI.star3.width  / 2;
            // centerY = this._curUI.star3.height / 2;
            // this._curUI.star3.pivot(centerX, centerY);
            // centerX = this._curUI.star4.width  / 2;
            // centerY = this._curUI.star4.height / 2;
            // this._curUI.star4.pivot(centerX, centerY);
        };
        BgElement.onFrame = function (time, delta) {
            BgElement.star1.rotation += 2;
        };
        BgElement.addChild = function (panel) {
            var centerX = BgElement.star1.width / 2;
            var centerY = BgElement.star1.height / 2;
            BgElement.star1.pos(0, 0);
            BgElement.star1.pivot(centerX, centerY);
            panel.addChild(BgElement.star1);
        };
        BgElement.star1 = new Laya.Sprite();
        return BgElement;
    }());
    logic.BgElement = BgElement;
})(logic || (logic = {}));
//# sourceMappingURL=BgElement.js.map