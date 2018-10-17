module logic
{
    // 程序入口
    export class UpdateStage extends asgard.stage.BaseStage
    {
        private _delayExit:number;

        constructor() 
        {
            super(GameConst.APP_NAME,logic.StageType.STAGE_UPDATE);
        }

        public onEnter():void
        {
            this._delayExit=Laya.timer.currTimer+1;
        }

        public onExit():void
        {
        }

        public onFrame(curtime: number,delta:number)
        {
            if(curtime>this._delayExit)
            {
                asgard.stage.StageManager.enterStage(GameConst.APP_NAME,logic.StageType.STAGE_WELCOME);
                //this.enterStage(stage.STAGE_LOADING);
            }

        }
        
    }
}