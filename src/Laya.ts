import WebGL = Laya.WebGL;
class GameMain{
 
    constructor() {
        
                 //初始化引擎
        Laya.init(logic.GameConst.SCEEN_HEIGHT, logic.GameConst.SCEEN_WIDTH, Laya.WebGL);

        //适配模式
        Laya.stage.alignH       =   Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV       =   Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode   =   Laya.Stage.SCREEN_VERTICAL;
        Laya.stage.scaleMode    =   Laya.Stage.SCALE_EXACTFIT;

        
        //初始化asgard
        asgard.module.ModuleManager.init(new logic.ModuleFactory());
        asgard.stage.StageManager.init(new logic.StageFactory());
        asgard.ui.UIManager.init(new logic.UIFactory());
        asgard.message.MessageDispatcher.init(new logic.MessageFactory());
        asgard.events.EventsDispatcher.init(logic.GameConst.APP_NAME);
 
        Laya.Stat.show(0,0);    //性能统计面板
        // 
        asgard.stage.StageManager.enterStage(logic.GameConst.APP_NAME,logic.StageType.STAGE_LOADING);

 
        Laya.timer.frameLoop(1, this, this.onFrame);
      
    }

    public onFrame():void
    {
        let time:number=Laya.timer.currTimer;
        let delta:number=Laya.timer.delta;

        asgard.ui.UIManager.onFrame(time,delta);
        asgard.stage.StageManager.onFrame(time,delta);
 
    }
      
}
new GameMain();