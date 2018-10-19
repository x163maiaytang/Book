namespace logic
{
    import TimeLine = Laya.TimeLine;
    export class Book2Panel extends asgard.ui.BaseUIPanel
    {
        private _curUI:ui.book2UI;

        private timeLine:TimeLine = new TimeLine();

        private pageIndex:number = 15;

        private orderNum:number = 15;
 
        constructor(name:string)
        {
            super(GameConst.APP_NAME,name);
        }

        protected createView():laya.ui.View
        {
            return this._curUI = new ui.book2UI();
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
            

            for(let index:number = 15; index > 0; index --){
                let page:Laya.Sprite = new Laya.Sprite();
                page.loadImage("book/"+index+".jpg", 0, 0);

                this._curUI.container.addChild(page);
            }

               for(let index:number = 14; index >= 0; index --){


                let page:Laya.Sprite = this._curUI.container.getChildAt(index) as Laya.Sprite;;
                page.x = this._curUI.container.width / 2;
                page.pivotY = page.height / 2;


                if(index % 2 != 0){
                     page.skewY = -180;
                     page.x = this._curUI.container.width / 2;
                    page.pivotX = page.width;
                    page.x = this._curUI.container.width / 2;
                }
            }
 
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

            gs.next("end");
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
                        this.onPageComplete();
            let gs:GameStage = asgard.stage.StageManager.CurStage(logic.GameConst.APP_NAME) as GameStage;
            gs.closeLast();
        }
        
        private havePage(index:number):boolean{
            return index >= 0 && index < 15;
        }
        protected onPageComplete():void
        {

            this.pageIndex --

            if(this.pageIndex > 0){
                this.orderNum ++;

                let page:Laya.Sprite = this._curUI.container.getChildAt(this.pageIndex) as Laya.Sprite;
                page.zOrder += Math.pow(this.orderNum, 2);
    
                Laya.Tween.to(page, { skewY: -180 }, 2000, null, null);
            }

             this.pageIndex --

            if(this.pageIndex > 0){
                // this.orderNum ++;

                let page:Laya.Sprite = this._curUI.container.getChildAt(this.pageIndex) as Laya.Sprite;
        //    page.zOrder += Math.pow(this.orderNum, 2);
    
                Laya.Tween.to(page, { skewY: -270 }, 1000, null, Laya.Handler.create(this, this.onPageHalfComplete));
            }
        }

        protected onPageHalfComplete():void
        {
                this.orderNum ++;

                let page:Laya.Sprite = this._curUI.container.getChildAt(this.pageIndex) as Laya.Sprite;
                page.zOrder += Math.pow(this.orderNum, 2);
    
                Laya.Tween.to(page, { skewY: -360 }, 1000, null, Laya.Handler.create(this, this.onPageComplete));

                logic.SoundManager.playSound("sound/flipsound.ogg");
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