
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class bookUI extends View {
		public on:Laya.Image;
		public off:Laya.Image;
		public star1:Laya.Image;
		public star3:Laya.Image;
		public star4:Laya.Image;
		public star2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":720,"pivotY":0,"pivotX":0,"height":1280},"child":[{"type":"Image","props":{"y":38,"x":622,"var":"on","skin":"comp/icon_music_on2.png"}},{"type":"Image","props":{"y":38,"x":622,"var":"off","skin":"comp/icon_music_off2.png"}},{"type":"Image","props":{"y":1230,"x":323,"skin":"comp/icon_arrow2.png"}},{"type":"Image","props":{"y":167,"x":503,"var":"star1","skin":"comp/star1.png"}},{"type":"Image","props":{"y":715,"x":583,"var":"star3","skin":"comp/star3.png"}},{"type":"Image","props":{"y":111,"x":109,"var":"star4","skin":"comp/star4.png"}},{"type":"Image","props":{"y":974,"x":-58,"var":"star2","skin":"comp/star2.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.bookUI.uiView);

        }

    }
}

module ui {
    export class loadingUI extends View {
		public progress:Laya.ProgressBar;
		public num:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280},"child":[{"type":"ProgressBar","props":{"y":575,"x":91,"width":500,"var":"progress","skin":"comp/progress_loading.png","sizeGrid":"0,35,0,35","height":5}},{"type":"Text","props":{"y":581,"x":312,"width":22,"var":"num","text":"0","height":16,"color":"#0cb5ea","align":"right"}},{"type":"Text","props":{"y":581,"x":336,"width":13,"text":"%","height":16,"color":"#0cb5ea"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.loadingUI.uiView);

        }

    }
}
