/********************************************************************************
 *	创建人：    PZK
 *	创建时间：  2018-08-10
 *	功能说明：  等待界面类
 *
 *	修改记录：
*********************************************************************************/
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
    var Book = /** @class */ (function (_super) {
        __extends(Book, _super);
        function Book(name) {
            return _super.call(this, logic.GameConst.APP_NAME, name) || this;
        }
        Book.prototype.createView = function () {
            if (!this._curUI) {
                this._curUI = new ui.bookUI();
            }
            return this._curUI;
        };
        Book.prototype.getDependenceRes = function () {
            return [];
        };
        Book.prototype.onInit = function () {
            //  AnimationManager.playAnimation(SpineRes.LOADING,this._curUI.waitDi_img);  //播放特效
        };
        Book.prototype.onShow = function () {
        };
        Book.prototype.onHide = function () {
        };
        Book.prototype.dispose = function () {
        };
        return Book;
    }(asgard.ui.BaseUIPanel));
    logic.Book = Book;
})(logic || (logic = {}));
//# sourceMappingURL=Book.js.map