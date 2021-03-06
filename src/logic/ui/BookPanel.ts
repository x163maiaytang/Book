namespace logic
{
    import TimeLine = Laya.TimeLine;
    export class BookPanel extends asgard.ui.BaseUIPanel
    {
        private _curUI:ui.bookUI;

        private timeLine:TimeLine = new TimeLine();
 
        constructor(name:string)
        {
            super(GameConst.APP_NAME,name);
        }

        protected createView():laya.ui.View
        {
            
            return this._curUI = new ui.bookUI();
        }

        public getDependenceRes():Array<any>
        {
            return [
                    ];
        }

        protected onInit():void
        {
          //  AnimationManager.playAnimation(SpineRes.LOADING,this._curUI.waitDi_img);  //播放特效

            this.bgOn();

            this._curUI.mus_on.on(Laya.Event.CLICK,this,this.bgOn);
            this._curUI.mus_off.on(Laya.Event.CLICK,this,this.bgOff);
            this._curUI.next.on(Laya.Event.CLICK,this,this.next);


            var centerX = this._curUI.star1.width  / 2;
            var centerY = this._curUI.star1.height / 2;

            this._curUI.star1.pivot(centerX, centerY);

            centerX = this._curUI.star2.width  / 2;
            centerY = this._curUI.star2.height / 2;

            this._curUI.star2.pivot(centerX, centerY);
            
            centerX = this._curUI.star3.width  / 2;
            centerY = this._curUI.star3.height / 2;

            this._curUI.star3.pivot(centerX, centerY);
            
            centerX = this._curUI.star4.width  / 2;
            centerY = this._curUI.star4.height / 2;

            this._curUI.star4.pivot(centerX, centerY);



            this.timeLine.addLabel("up",0).to(this._curUI.next,{x:323, y:1200}, 1000,null,0).addLabel("alpha" ,0).to(this._curUI.next,{alpha:0.1}, 500, null ,0);

			this.timeLine.play(0,true);


            this._curUI.hao.pivot(this._curUI.hao.width / 2, this._curUI.hao.height / 2);
            this._curUI.hao.alpha = 0;
            this._curUI.shu.pivot(this._curUI.shu.width / 2, this._curUI.shu.height / 2);
            this._curUI.shu.alpha = 0;
            this._curUI.tui.pivot(this._curUI.tui.width / 2, this._curUI.tui.height / 2);
            this._curUI.tui.alpha = 0;
            this._curUI.jian.pivot(this._curUI.jian.width / 2, this._curUI.jian.height / 2);
            this._curUI.jian.alpha = 0;

            this._curUI.zdtj.alpha = 0;
            this._curUI.zdtj.scale(0.7, 0.7);

            this._curUI.t1.alpha = 0;
            this._curUI.t2.alpha = 0;
            this._curUI.t3.alpha = 0;
        }

        public bgOn():void{
            this._curUI.mus_on.visible = false;
            this._curUI.mus_off.visible = true;

            logic.SoundManager.playMusic("sound/bgmusic.mp3")
        }

        public bgOff():void{

            this._curUI.mus_on.visible = true;
            this._curUI.mus_off.visible = false;
            logic.SoundManager.stopMusic();
        }

        public next():void{

 

            let gs:GameStage = asgard.stage.StageManager.CurStage(logic.GameConst.APP_NAME) as GameStage;

            gs.next("book1");
        }

        protected onShow():void
        {
  //  this._curUI.y = 1280;
            // Laya.Tween.to(this._curUI.box, { y: 0 }, 1000);

            Laya.Tween.to(this._curUI.hao, { alpha: 1, y:265  }, 800, Laya.Ease.elasticOut, Laya.Handler.create(this, this.onHaoComplete));
            Laya.Tween.to(this._curUI.shu, { alpha: 1, y:265 }, 800, Laya.Ease.elasticOut, Laya.Handler.create(this, this.onShuComplete), 600);
            Laya.Tween.to(this._curUI.tui, { alpha: 1, y:265 }, 800, Laya.Ease.elasticOut, Laya.Handler.create(this, this.onTuiComplete), 1000);
            Laya.Tween.to(this._curUI.jian, { alpha: 1, y:265 }, 800, Laya.Ease.elasticOut, Laya.Handler.create(this, this.onJianComplete), 1200);
        }
        
        protected onHide():void
        {
            console.log(1);
        }

        public dispose():void
        {
            
        }

        protected onHaoComplete():void
        {
            
             Laya.Tween.to(this._curUI.zdtj, { alpha: 1, scaleX: 1, scaleY: 1 }, 800, Laya.Ease.elasticOut, null);
        }

        protected onShuComplete():void
        {
            
        }

        protected onTuiComplete():void
        {
         //    Laya.Tween.to(this._curUI.zdtj, { alpha: 1, scaleX: 1, scaleY: 1 }, 500, Laya.Ease.elasticOut, null, 800);
        }

        protected onJianComplete():void
        {
            Laya.Tween.to(this._curUI.book1, { alpha: 1, y: 490}, 1500, Laya.Ease.bounceOut, null);
            // Laya.Tween.to(this._curUI.book1, { rotation: this._curUI.book1.rotation + 2}, 800, Laya.Ease.bounceOut, null, 1500);
            // Laya.Tween.to(this._curUI.book1, { rotation: this._curUI.book1.rotation - 2}, 800, Laya.Ease.bounceOut, null, 2300);
            Laya.Tween.to(this._curUI.book2, { alpha: 1, y: 460}, 1500, Laya.Ease.bounceOut, null, 800);
            Laya.Tween.to(this._curUI.book3, { alpha: 1, y: 430}, 1500, Laya.Ease.bounceOut, null, 1200);

            Laya.Tween.to(this._curUI.t1, {y: 915, alpha: 1}, 2000, Laya.Ease.quintOut, null);
            Laya.Tween.to(this._curUI.t2, {y: 1015, alpha: 1}, 2000, Laya.Ease.quintOut, null, 1000);
            Laya.Tween.to(this._curUI.t3, {y: 1135, alpha: 1}, 2000, Laya.Ease.quintOut, null, 2000);

                   
        }
        public onFrame(time:number,delta:number):void
        {
            this._curUI.star1.rotation += 2;
            this._curUI.star2.rotation += 0.5;
            this._curUI.star3.rotation += 0.5;
            this._curUI.star4.rotation += 1;
        }
    }
}