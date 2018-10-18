module asgard.ui
{
    export class UIManager
	{
        private static _Tip_Root:Laya.Sprite;
        private static _UI_Root:Laya.Sprite;
        private static _Game_Root:Laya.Sprite;
        private static _Bkg_Root:Laya.Sprite;
        
        private static _uifactory:Laya.Dictionary=new Laya.Dictionary();
        private static _uiPanels:Array<BaseUIPanel>=new Array<BaseUIPanel>();
        
        public static init(uifactory:IUIFactory):void
        {
            UIManager._Bkg_Root=new Laya.Sprite();
            Laya.stage.addChild(UIManager._Bkg_Root);
            UIManager._Game_Root=new Laya.Sprite();
            Laya.stage.addChild(UIManager._Game_Root);
            UIManager._UI_Root=new Laya.Sprite();
            Laya.stage.addChild(UIManager._UI_Root);
            UIManager._Tip_Root=new Laya.Sprite();
            Laya.stage.addChild(UIManager._Tip_Root);

            if(UIManager._uiPanels.length>0)
            {
                UIManager._uiPanels.splice(0,UIManager._uiPanels.length);
            }

            if(uifactory && UIManager._uifactory.indexOf(uifactory.getAppName())<0)
            {
                UIManager._uifactory.set(uifactory.getAppName(),uifactory);
            }
        }

        public static addBkgView(view:Laya.Sprite):void
        {
            if(view)
            {
                UIManager._Bkg_Root.addChild(view);
            }
        }

        public static addGameView(view:Laya.Sprite):void
        {
            if(view)
            {
                UIManager._Game_Root.addChild(view);
            }
        }

        public static addUIView(view:Laya.Sprite):void
        {
            if(view)
            {
                UIManager._UI_Root.addChild(view);
            }
        }

        public static addTipView(view:Laya.Sprite):void
        {
            if(view)
            {
                UIManager._Tip_Root.addChild(view);
            }
        }

        public static findUIPanel(appname:string,uiname:string):BaseUIPanel
        {
            let fuipanel:BaseUIPanel=null;
            for (let uipanel of UIManager._uiPanels) 
            {
                if(uipanel && uipanel.getName()==uiname && uipanel.getAppName()==appname)
                {
                    fuipanel=uipanel;
                }
            }
            return fuipanel;
        }

        public static openView(appname:string,viewname:string):BaseUIPanel
        {
            let uiView:BaseUIPanel=UIManager.findUIPanel(appname,viewname);
            if(!uiView)
            {
                let uifactory:IUIFactory=UIManager._uifactory.get(appname);
                if(uifactory)
                {
                    uiView=uifactory.getUI(viewname);
                    if(uiView)
                    {
                        UIManager._uiPanels.push(uiView);
                    }
                }
            }
            if(uiView)
            {
                uiView.openView();
            }
            return uiView;
        }

        public static prepareView(appname:string,viewname:string):BaseUIPanel
        {
            let uiView:BaseUIPanel=UIManager.findUIPanel(appname,viewname);
            if(!uiView)
            {
                let uifactory:IUIFactory=UIManager._uifactory.get(appname);
                if(uifactory)
                {
                    uiView=uifactory.getUI(viewname);
                    if(uiView)
                    {
                        UIManager._uiPanels.push(uiView);
                    }
                }
            }
            if(uiView)
            {
                uiView.prepareView();
            }
            return uiView;
        }

        public static closeView(appname:string,uiname:string):void
        {
            // let uiView:BaseUIPanel=UIManager.findUIPanel(appname,viewname);
     

            let removeIndex:number = -1;
            let uiView:BaseUIPanel=null;
            let index:number = 0;
            for (let uipanel of UIManager._uiPanels) 
            {
                if(uipanel && uipanel.getName()==uiname && uipanel.getAppName()==appname)
                {
                    uiView=uipanel;

                    removeIndex = index;
                    break;
                }
                index ++;
            }
          
            if(removeIndex > -1) {
                UIManager._uiPanels.splice(removeIndex, 1);
            }
            console.log(UIManager._uiPanels.length + "==========")
            if(uiView)
            {
                uiView.closeView(true);
            }
        }

        public static onFrame(time:number,delta:number):void
        {
            for (let uipanel of UIManager._uiPanels) 
            {
                if(uipanel && uipanel.isVisible())
                {
                    uipanel.onFrame(time,delta);
                }
            }
        }

    }
}