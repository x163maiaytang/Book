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
                case UIRes.BOOK: return new BookPanel(viewname);
                case UIRes.LOADING: return new LoadingPanel(viewname);
                
                    
            }
            return null;
        }
    }
}