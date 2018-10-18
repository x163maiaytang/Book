namespace logic
{
    import TimeLine = Laya.TimeLine;
    export class Book1Panel extends asgard.ui.BaseUIPanel
    {
        private _curUI:ui.book1UI;

        private timeLine:TimeLine = new TimeLine();
 
        constructor(name:string)
        {
            super(GameConst.APP_NAME,name);
        }

        protected createView():laya.ui.View
        {
            
            return this._curUI = new ui.book1UI();
        }

        public getDependenceRes():Array<any>
        {
            return [
                    ];
        }

        protected onInit():void
        {
            this._curUI.mus_on.visible = false;
            this._curUI.mus_off.visible = true;

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

            gs.next("book2");
        }
        protected onShow():void
        {
            this._curUI.box.y=1280;
            Laya.Tween.to(this._curUI.box, { y: 0 }, 1000, null, Laya.Handler.create(this, this.onComplete));
            			 
        }
        
        protected onHide():void
        {
            console.log("111");
        }

        protected onComplete():void
        {
            Laya.Tween.to(this._curUI.i0, { x: 720 }, 2000, null, Laya.Handler.create(this, this.onI0Complete));
            Laya.Tween.to(this._curUI.i1, { x: -1000 }, 2000, null, Laya.Handler.create(this, this.onI1Complete));
        }

        protected onI0Complete():void
        {
            Laya.Tween.to(this._curUI.i2, { x: -1000 }, 2000, null, Laya.Handler.create(this, this.onI2Complete))
        }

        protected onI1Complete():void
        {
            Laya.Tween.to(this._curUI.i3, { x: 720 }, 2000, null, Laya.Handler.create(this, this.onI3Complete))
        }

        protected onI2Complete():void
        {
            Laya.Tween.to(this._curUI.i4, { alpha: 1 }, 1000, null, Laya.Handler.create(this, this.onI4Complete))
        }

        protected onI3Complete():void
        {
            
        }

        protected onI4Complete():void
        {
            
        }
        public dispose():void
        {
            
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