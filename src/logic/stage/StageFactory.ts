module logic
{
    export enum StageType{
        STAGE_NONE = 0,
        STAGE_UPDATE,
        STAGE_WELCOME,    //Logo
        STAGE_LOADING,    //Loading
        STAGE_LOGIN,      //登录状态
        STAGE_GAME,       //游戏内
    }
    // 程序入口
    export class StageFactory implements asgard.stage.IStageFactory 
    {
        public getAppName():string
        {
            return GameConst.APP_NAME;
        }

        public  getStage(stageid:number):asgard.stage.BaseStage
        {
            switch(stageid)
            {
                case logic.StageType.STAGE_UPDATE:
                    return new UpdateStage();
                case logic.StageType.STAGE_WELCOME:
                    return new WelcomeStage();
                case logic.StageType.STAGE_LOADING:
                    return new LoadingStage();
                case logic.StageType.STAGE_GAME:
                    return new GameStage();
            }
            return null;
        }
    }
}