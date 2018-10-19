module logic
{
    // 程序入口
    export class GameStage extends asgard.stage.BaseStage
    {
        private index:number = 0;
        private curPanel:string;
        private lastPanel:string;
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
 
            if(this.curPanel != nextPanel){


              this.index ++;

              asgard.ui.UIManager.openView(logic.GameConst.APP_NAME,nextPanel);
    
              this.lastPanel = this.curPanel;
              this.curPanel = nextPanel;
            }

          
        }

        public closeLast(){
            if(this.lastPanel){

                asgard.ui.UIManager.closeView(logic.GameConst.APP_NAME,this.lastPanel);
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