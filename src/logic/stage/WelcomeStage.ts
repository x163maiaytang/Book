module logic
{
    // 程序入口
    export class WelcomeStage extends asgard.stage.BaseStage
    {
        private _delayExit:number;
        
        constructor() 
        {
            super(GameConst.APP_NAME,logic.StageType.STAGE_WELCOME);
            this._delayExit=1000;
        }

        public onEnter():void
        {
            // asgard.ui.UIManager.openView(logic.GameConst.APP_NAME,logic.UIRes.LOGO);
            this._delayExit=Laya.timer.currTimer+ 2000; //在Logo界面停2秒
        }

        public onExit():void
        {
            // asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,logic.UIRes.LOGO);
        }

        public onFrame(curtime: number,delta:number)
        {
            if(this._delayExit>0 && curtime>this._delayExit)
            {
                asgard.stage.StageManager.enterStage(GameConst.APP_NAME,logic.StageType.STAGE_LOADING);
            }
        }

        public init():void
        {
            
        }

    }
}