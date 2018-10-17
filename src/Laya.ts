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
        //初始化引擎
        // Laya.init(600,400);
        // Laya.stage.bgColor = "#ffcccc";
        // var div:any = Laya.Browser.window.document.createElement("div");
        // this.qrcode = new Laya.Browser.window.QRCode(div,{
        //     text: "http://jindo.dev.naver.com/collie",
        //     width: 128,
        //     height: 128,
        //     colorDark : "#000000",
        //     colorLight : "#ffffff",
        //     correctLevel : Laya.Browser.window.QRCode.CorrectLevel.H
        // });
        // var url:string = "http://layabox.com/";
        // this.qrcode.makeCode(url);
        // Laya.stage.once("click",this,this.clickHandler);
        // this.qrcodeSp = new Laya.Sprite();
        // Laya.stage.addChild(this.qrcodeSp);

    // private clickHandler():void{
    //     var url:string = this.qrcode._oDrawing._elImage.src;//获取，注意这里是异步的，开发者可以加个延时在获取。
    //     this.qrcodeSp.loadImage(url,0,0,200,200);
    // }
}
new GameMain();