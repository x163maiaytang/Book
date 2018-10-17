/**
* name 
*/
module logic
{
    // 程序入口
    export class LoadingStage extends asgard.stage.BaseStage
    {
        private _delayExit:number;
        
        constructor() 
        {
            super(GameConst.APP_NAME,logic.StageType.STAGE_LOADING);
            this._delayExit=1000;
        }

        public onEnter():void
        {
            SoundManager.initSoundSystem();

            asgard.ui.UIManager.openView(logic.GameConst.APP_NAME,logic.UIRes.LOADING);
        }

        public onExit():void
        {
            asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,logic.UIRes.LOADING);
        }

        public onFrame(curtime: number,delta:number)
        {
        }

        public init():void
        {
            
        }

    }
}