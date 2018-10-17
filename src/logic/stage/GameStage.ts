module logic
{
    // 程序入口
    export class GameStage extends asgard.stage.BaseStage
    {

        constructor() 
        {
            super(GameConst.APP_NAME,logic.StageType.STAGE_GAME);
     
        }

        public onEnter():void
        {
             asgard.ui.UIManager.openView(logic.GameConst.APP_NAME,logic.UIRes.BOOK);
 
        }

        public onExit():void
        {
            // asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,logic.UIRes.GAMEMAINROOT);
          
        }
         
    }
}