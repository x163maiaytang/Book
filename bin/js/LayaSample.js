var WebGL = Laya.WebGL;
// 程序入口
var GameMain = /** @class */ (function () {
    //二维码对象
    // private qrcode:any;
    // private qrcodeSp:Laya.Sprite;
    function GameMain() {
        //初始化引擎
        Laya.init(720, 1280, Laya.WebGL);
        //适配模式
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
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
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map