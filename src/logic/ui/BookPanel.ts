namespace logic
{
    export class BookPanel extends asgard.ui.BaseUIPanel
    {
        private _curUI:ui.bookUI;
 
        constructor(name:string)
        {
            super(GameConst.APP_NAME,name);
        }

        protected createView():laya.ui.View
        {
            if(!this._curUI)
            {
                this._curUI=new ui.bookUI();
            }
            return this._curUI;
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

            this._curUI.on.on(Laya.Event.CLICK,this,this.bgOn);
            this._curUI.off.on(Laya.Event.CLICK,this,this.bgOff);

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
        }

        public bgOn():void{
            this._curUI.on.visible = false;
            this._curUI.off.visible = true;

            logic.SoundManager.playMusic("sound/bgmusic.mp3")
        }

        public bgOff():void{

            this._curUI.on.visible = true;
            this._curUI.off.visible = false;
            logic.SoundManager.stopMusic();
        }

        protected onShow():void
        {


        }
        
        protected onHide():void
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