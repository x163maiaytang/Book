namespace logic
{
    export class UIFactory implements asgard.ui.IUIFactory
    {
        public getAppName():string
        {
            return GameConst.APP_NAME;
        }

        public getUI(viewname:string):asgard.ui.BaseUIPanel
        {
            switch(viewname)
            {
                case UIRes.LOADING: return new LoadingPanel(viewname);
                case UIRes.BOOK: return new BookPanel(viewname);
                case UIRes.BOOK1: return new Book1Panel(viewname);
                case UIRes.BOOK2: return new Book2Panel(viewname);
                case UIRes.END: return new EndPanel(viewname);
                    
            }
            return null;
        }
    }
}