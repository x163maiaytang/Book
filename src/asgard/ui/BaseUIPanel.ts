module asgard.ui
{
    export class BaseUIPanel
	{
        protected _appName:string;
        protected _name:string;
        protected _resReady:boolean;
        protected _visible:boolean;
        protected _uiView:laya.ui.View;

        constructor(appname:string,name:string)
        {
            this._appName=appname;
            this._name=name;
            this._resReady=false;
        }

        public getAppName():string
        {
            return this._appName;
        }

        public getName():string
        {
            return this._name;
        }

        public getView():laya.ui.View
        {
            if(!this._uiView)
            {
                this._uiView=this.createView();
                if(this._uiView)
                {
                    this._uiView.name=this._name;
                    this.onInit();
                    UIManager.addUIView(this._uiView);
                }
            }
            return this._uiView;
        }

        public isVisible():boolean
        {
            return this._visible;
        }

        public isResReady():boolean
        {
            return this._resReady;
        }

        public getDependenceRes():Array<any>
        {
            return null;
        }

        protected createView():laya.ui.View
        {
            return null;
        }

        private _prepareRes():void
        {
            if(!this._resReady)
            {
                let depRes:Array<any>=this.getDependenceRes();
                if(depRes && depRes.length > 0)
                {
                    Laya.loader.load(depRes,Laya.Handler.create(this, this.onResLoaded));
                }
                else
                {
                    this.onResLoaded();
                }
            }
            else
            {
                this._doShow();
            }
        }

        public prepareView():void
        {
            this._visible=false;
            this._prepareRes();
        }

        public openView():void
        {
            this._visible=true;
            this._prepareRes();
        }

        public closeView(remove?:boolean):void
        {
            this._visible=false;
            this._uiView.visible = false;
            this.onHide();
            if(remove && this._uiView)
            {
                this._uiView.removeSelf();
                //this._uiView.destroy();
            }
        }

        private onResLoaded():void
        {
            this._resReady=true;
            this.onPrepared();
            if(!this._visible)
            {
                return;
            }  

            this._doShow();  
        }

        private _doShow()
        {
            let uiview:laya.ui.View=this.getView();
            if(this._visible && uiview)
            {
                uiview.visible = true;
                this.onShow();
                
                UIManager.addUIView(uiview);
            }
        }

        public onFrame(time:number,delta:number):void
        {
        }

        protected onInit():void
        {
        }

        protected onPrepared():void
        {
        } 

        protected onShow():void
        {
        }

        protected onHide():void
        {
        }

        public dispose():void
        {
        }
		
    }
}