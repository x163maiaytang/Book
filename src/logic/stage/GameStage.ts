module logic
{
    // 程序入口
    export class GameStage extends asgard.stage.BaseStage
    {
        private index:number = 0;
        private curPanel:string;
        constructor() 
        {
            super(GameConst.APP_NAME,logic.StageType.STAGE_GAME);
        }

        public onEnter():void
        {
             this.init();
        }

        public onExit():void
        {
             asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME, this.curPanel);
          
        }

        public next(nextPanel:string):void
        {
            // if(nextPanel == "book"){
            //       asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,"book");
            //       asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,"book1");
            //       asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,"book2");
            //       asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,"end");
            // }
            if(this.curPanel != nextPanel){


              this.index ++;

              asgard.ui.UIManager.openView(logic.GameConst.APP_NAME,nextPanel);
              asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,this.curPanel);

              this.curPanel = nextPanel;
            }

          
        }

        public init():void
        {
            this.index = 0;

            if(this.curPanel){
                 asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,this.curPanel);
            }
            this.curPanel = logic.UIRes.BOOK;
            asgard.ui.UIManager.openView(logic.GameConst.APP_NAME,logic.UIRes.BOOK);
          
        }
         
    }
}