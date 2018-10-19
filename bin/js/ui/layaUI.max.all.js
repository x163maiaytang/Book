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
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.bookUI.uiView);
        };
        bookUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 720, "pivotY": 0, "pivotX": 0, "height": 1280, "alpha": 1 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 720, "var": "box", "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 38, "x": 622, "var": "mus_on", "skin": "comp/icon_music_on2.png" } }, { "type": "Image", "props": { "y": 38, "x": 622, "var": "mus_off", "skin": "comp/icon_music_off2.png" } }, { "type": "Image", "props": { "y": 1227, "x": 323, "var": "next", "skin": "comp/icon_arrow2.png" } }, { "type": "Image", "props": { "y": 167, "x": 503, "var": "star1", "skin": "comp/star1.png" } }, { "type": "Image", "props": { "y": 715, "x": 583, "var": "star3", "skin": "comp/star3.png" } }, { "type": "Image", "props": { "y": 111, "x": 109, "var": "star4", "skin": "comp/star4.png" } }, { "type": "Image", "props": { "y": 974, "x": -58, "var": "star2", "skin": "comp/star2.png" } }, { "type": "Text", "props": { "y": 76, "x": 166, "width": 430, "text": "豆瓣阅读2019年好书推荐精选", "height": 34, "fontSize": 30, "font": "Microsoft YaHei", "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "zdtj", "skin": "comp/zbtj.png" } }, { "type": "Image", "props": { "y": -241, "x": 27, "var": "book1", "skin": "comp/shu2.png" } }, { "type": "Image", "props": { "y": -279, "x": 175, "var": "book2", "skin": "comp/shu1.png", "rotation": 0 } }, { "type": "Image", "props": { "y": -315, "x": 318, "var": "book3", "skin": "comp/shu0.png" } }, { "type": "Text", "props": { "y": 1289, "x": 126, "width": 509, "var": "t1", "text": "加西亚.马尔克斯 [百年孤独] ,全球正式授权", "height": 34, "fontSize": 25, "font": "Microsoft YaHei", "color": "#ffffff", "bold": false, "align": "center" } }, { "type": "Text", "props": { "y": 1350, "x": 109, "width": 520, "var": "t2", "text": "卡勒德.胡塞 [追风筝的人] ,全球正式授权", "height": 44, "fontSize": 28, "font": "Microsoft YaHei", "color": "#ffffff", "bold": false, "align": "center" } }, { "type": "Text", "props": { "y": 1399, "x": 204, "width": 361, "var": "t3", "text": "余华 [活着] ,经典再次来袭", "height": 43, "fontSize": 30, "font": "Microsoft YaHei", "color": "#ffffff", "bold": false, "align": "center" } }, { "type": "Image", "props": { "y": 245, "x": 113, "width": 120, "var": "hao", "skewY": 0, "height": 120 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 10, "var": "h", "skin": "comp/h.png" } }, { "type": "Image", "props": { "y": 12, "x": 16, "var": "h0", "skin": "comp/h0.png" } }] }, { "type": "Image", "props": { "y": 245, "x": 248, "width": 120, "var": "shu", "height": 120 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 10, "var": "s", "skin": "comp/s.png" } }, { "type": "Image", "props": { "y": 12, "x": 15, "var": "s0", "skin": "comp/s0.png" } }] }, { "type": "Image", "props": { "y": 245, "x": 384, "width": 120, "var": "tui", "height": 120 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 10, "var": "t", "skin": "comp/t.png" } }, { "type": "Image", "props": { "y": 13, "x": 15, "var": "t0", "skin": "comp/t0.png" } }] }, { "type": "Image", "props": { "y": 245, "x": 519, "width": 120, "var": "jian", "height": 120 }, "child": [{ "type": "Image", "props": { "y": 9, "x": 10, "var": "j", "skin": "comp/j.png" } }, { "type": "Image", "props": { "y": 12, "x": 15, "var": "j0", "skin": "comp/j0.png" } }] }] }] };
        return bookUI;
    }(View));
    ui.bookUI = bookUI;
})(ui || (ui = {}));
(function (ui) {
    var book1UI = /** @class */ (function (_super) {
        __extends(book1UI, _super);
        function book1UI() {
            return _super.call(this) || this;
        }
        book1UI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.book1UI.uiView);
        };
        book1UI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 720, "pivotY": 0, "pivotX": 0, "height": 1280, "alpha": 1 }, "child": [{ "type": "Image", "props": { "y": 1280, "width": 720, "var": "box", "skin": "comp/black.png", "sizeGrid": "3,3,3,3", "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 38, "x": 622, "var": "mus_on", "skin": "comp/icon_music_on2.png" } }, { "type": "Image", "props": { "y": 38, "x": 622, "var": "mus_off", "skin": "comp/icon_music_off2.png" } }, { "type": "Image", "props": { "y": 1230, "x": 323, "var": "next", "skin": "comp/icon_arrow2.png" } }, { "type": "Image", "props": { "y": 167, "x": 503, "var": "star1", "skin": "comp/star1.png" } }, { "type": "Image", "props": { "y": 715, "x": 583, "var": "star3", "skin": "comp/star3.png" } }, { "type": "Image", "props": { "y": 111, "x": 109, "var": "star4", "skin": "comp/star4.png" } }, { "type": "Image", "props": { "y": 974, "x": -58, "var": "star2", "skin": "comp/star2.png" } }, { "type": "Image", "props": { "y": 61, "x": -801, "var": "i0", "skin": "book/i0.jpg" } }, { "type": "Image", "props": { "y": 817, "x": 722, "var": "i1", "skin": "book/i1.jpg" } }, { "type": "Image", "props": { "y": 285, "x": 721, "var": "i2", "skin": "book/i2.jpg" } }, { "type": "Image", "props": { "y": 592, "x": -801, "var": "i3", "skin": "book/i3.jpg" } }, { "type": "Image", "props": { "y": 396, "x": 0, "var": "i4", "skin": "book/i4.jpg", "alpha": 0 } }] }] };
        return book1UI;
    }(View));
    ui.book1UI = book1UI;
})(ui || (ui = {}));
(function (ui) {
    var book2UI = /** @class */ (function (_super) {
        __extends(book2UI, _super);
        function book2UI() {
            return _super.call(this) || this;
        }
        book2UI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.book2UI.uiView);
        };
        book2UI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 720, "pivotY": 0, "pivotX": 0, "height": 1280, "alpha": 1 }, "child": [{ "type": "Image", "props": { "y": 1280, "width": 720, "var": "box", "skin": "comp/black.png", "skewY": 0, "sizeGrid": "3,3,3,3", "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 38, "x": 622, "var": "mus_on", "skin": "comp/icon_music_on2.png" } }, { "type": "Image", "props": { "y": 38, "x": 622, "var": "mus_off", "skin": "comp/icon_music_off2.png" } }, { "type": "Image", "props": { "y": 1230, "x": 323, "var": "next", "skin": "comp/icon_arrow2.png" } }, { "type": "Image", "props": { "y": 167, "x": 503, "var": "star1", "skin": "comp/star1.png" } }, { "type": "Image", "props": { "y": 715, "x": 583, "var": "star3", "skin": "comp/star3.png" } }, { "type": "Image", "props": { "y": 111, "x": 109, "var": "star4", "skin": "comp/star4.png" } }, { "type": "Image", "props": { "y": 974, "x": -58, "var": "star2", "skin": "comp/star2.png" } }, { "type": "Image", "props": { "y": 868, "x": 1, "width": 721, "var": "container", "skewY": 0, "skewX": 0, "pivotY": 302, "height": 598 } }] }] };
        return book2UI;
    }(View));
    ui.book2UI = book2UI;
})(ui || (ui = {}));
(function (ui) {
    var endUI = /** @class */ (function (_super) {
        __extends(endUI, _super);
        function endUI() {
            return _super.call(this) || this;
        }
        endUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.endUI.uiView);
        };
        endUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 720, "pivotY": 0, "pivotX": 0, "height": 1280, "alpha": 1 }, "child": [{ "type": "Image", "props": { "y": 1280, "width": 720, "var": "box", "skin": "comp/black.png", "sizeGrid": "3,3,3,3", "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 38, "x": 622, "var": "mus_on", "skin": "comp/icon_music_on2.png" } }, { "type": "Image", "props": { "y": 38, "x": 622, "var": "mus_off", "skin": "comp/icon_music_off2.png" } }, { "type": "Image", "props": { "y": 1230, "x": 323, "var": "next", "skin": "comp/icon_arrow2.png" } }, { "type": "Image", "props": { "y": 167, "x": 503, "var": "star1", "skin": "comp/star1.png" } }, { "type": "Image", "props": { "y": 715, "x": 583, "var": "star3", "skin": "comp/star3.png" } }, { "type": "Image", "props": { "y": 111, "x": 109, "var": "star4", "skin": "comp/star4.png" } }, { "type": "Image", "props": { "y": 974, "x": -58, "var": "star2", "skin": "comp/star2.png" } }, { "type": "Text", "props": { "y": 793, "x": 228, "width": 258, "var": "t", "text": "长按识别二维码", "height": 43, "fontSize": 30, "font": "Microsoft YaHei", "bold": true, "alpha": 74, "align": "center" } }] }] };
        return endUI;
    }(View));
    ui.endUI = endUI;
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
        loadingUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 720, "height": 1280 }, "child": [{ "type": "ProgressBar", "props": { "y": 575, "x": 91, "width": 500, "var": "progress", "skin": "comp/progress_loading.png", "sizeGrid": "0,32,0,30", "height": 5 } }, { "type": "Text", "props": { "y": 581, "x": 312, "width": 22, "var": "num", "text": "0", "height": 16, "color": "#0cb5ea", "align": "right" } }, { "type": "Text", "props": { "y": 581, "x": 336, "width": 13, "text": "%", "height": 16, "color": "#0cb5ea" } }] };
        return loadingUI;
    }(View));
    ui.loadingUI = loadingUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map