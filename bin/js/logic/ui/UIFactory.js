var logic;
(function (logic) {
    var UIFactory = /** @class */ (function () {
        function UIFactory() {
        }
        UIFactory.prototype.getAppName = function () {
            return logic.GameConst.APP_NAME;
        };
        UIFactory.prototype.getUI = function (viewname) {
            switch (viewname) {
                case logic.UIRes.LOADING: return new logic.LoadingPanel(viewname);
                case logic.UIRes.BOOK: return new logic.BookPanel(viewname);
                case logic.UIRes.BOOK1: return new logic.Book1Panel(viewname);
                case logic.UIRes.BOOK2: return new logic.Book2Panel(viewname);
                case logic.UIRes.END: return new logic.EndPanel(viewname);
            }
            return null;
        };
        return UIFactory;
    }());
    logic.UIFactory = UIFactory;
})(logic || (logic = {}));
//# sourceMappingURL=UIFactory.js.map