namespace logic
{
    export class LoadingPanel extends asgard.ui.BaseUIPanel
    {
        private _curUI:ui.loadingUI;
 
        constructor(name:string)
        {
            super(GameConst.APP_NAME,name);
        }

        protected createView():laya.ui.View
        {
            if(!this._curUI)
            {
                this._curUI=new ui.loadingUI();
            }
            return this._curUI;
        }

        public getDependenceRes():Array<any>
        {
             return [
                        {url : "comp/progress_loading.png", type : Laya.Loader.IMAGE },
                        {url : "comp/progress_loading$bar.png", type : Laya.Loader.IMAGE },
                    ];
        }

        protected onInit():void
        {
       
        }

        public getRes():Array<any>
        {
                   return [
                    {url : "sound/bgmusic.mp3", type : Laya.Loader.SOUND },
                    {url : "book/1.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/2.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/3.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/4.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/5.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/6.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/7.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/8.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/9.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/10.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/11.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/12.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/13.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/14.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/15.jpg", type : Laya.Loader.IMAGE },
                 //   {url : "book/bg.png", type : Laya.Loader.IMAGE },
                    {url : "book/i0.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/i1.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/i2.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/i3.jpg", type : Laya.Loader.IMAGE },
                    {url : "book/i4.jpg", type : Laya.Loader.IMAGE },
                    {url : "res/atlas/comp.atlas", type : Laya.Loader.ATLAS },
                    ];
        }
        protected onShow():void
        {

            Laya.loader.load(this.getRes() ,Laya.Handler.create(this, this.onLoaded),Laya.Handler.create(this, this.onLoadSchedule,null,false));
        }
        
        public onLoadSchedule(data:any)
        {
            console.log("进度： " + data);
			this._curUI.progress.value = data;
            var i:number = data as number;
            this._curUI.num.text = Math.floor(i * 100) + ""
		}

        public onLoaded(data:any)
        {
            if(!data)
               return;

            asgard.stage.StageManager.enterStage(logic.GameConst.APP_NAME,logic.StageType.STAGE_GAME);
		}
        protected onHide():void
        {
            
        }

        public dispose():void
        {
            
        }
    }
}