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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var bookUI = /** @class */ (function (_super) {
        __extends(bookUI, _super);
        function bookUI() {
            return _super.call(this) || this;
        }
        bookUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.bookUI.uiView);
        };
        bookUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 720, "pivotY": 0, "pivotX": 0, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 38, "x": 622, "var": "on", "skin": "comp/icon_music_on2.png" } }, { "type": "Image", "props": { "y": 38, "x": 622, "var": "off", "skin": "comp/icon_music_off2.png" } }, { "type": "Image", "props": { "y": 1230, "x": 323, "skin": "comp/icon_arrow2.png" } }, { "type": "Image", "props": { "y": 167, "x": 503, "var": "star1", "skin": "comp/star1.png" } }, { "type": "Image", "props": { "y": 715, "x": 583, "var": "star3", "skin": "comp/star3.png" } }, { "type": "Image", "props": { "y": 111, "x": 109, "var": "star4", "skin": "comp/star4.png" } }, { "type": "Image", "props": { "y": 974, "x": -58, "var": "star2", "skin": "comp/star2.png" } }] };
        return bookUI;
    }(View));
    ui.bookUI = bookUI;
})(ui || (ui = {}));
(function (ui) {
    var loadingUI = /** @class */ (function (_super) {
        __extends(loadingUI, _super);
        function loadingUI() {
            return _super.call(this) || this;
        }
        loadingUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.loadingUI.uiView);
        };
        loadingUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280 }, "child": [{ "type": "ProgressBar", "props": { "y": 575, "x": 91, "width": 500, "var": "progress", "skin": "comp/progress_loading.png", "sizeGrid": "0,35,0,35", "height": 5 } }, { "type": "Text", "props": { "y": 581, "x": 312, "width": 22, "var": "num", "text": "0", "height": 16, "color": "#0cb5ea", "align": "right" } }, { "type": "Text", "props": { "y": 581, "x": 336, "width": 13, "text": "%", "height": 16, "color": "#0cb5ea" } }] };
        return loadingUI;
    }(View));
    ui.loadingUI = loadingUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map