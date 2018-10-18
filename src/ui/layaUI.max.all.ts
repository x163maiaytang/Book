
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class bookUI extends View {
		public box:Laya.Image;
		public mus_on:Laya.Image;
		public mus_off:Laya.Image;
		public next:Laya.Image;
		public star1:Laya.Image;
		public star3:Laya.Image;
		public star4:Laya.Image;
		public star2:Laya.Image;
		public zdtj:Laya.Image;
		public book1:Laya.Image;
		public book2:Laya.Image;
		public book3:Laya.Image;
		public t1:laya.display.Text;
		public t2:laya.display.Text;
		public t3:laya.display.Text;
		public hao:Laya.Image;
		public h:Laya.Image;
		public h0:Laya.Image;
		public shu:Laya.Image;
		public s:Laya.Image;
		public s0:Laya.Image;
		public tui:Laya.Image;
		public t:Laya.Image;
		public t0:Laya.Image;
		public jian:Laya.Image;
		public j:Laya.Image;
		public j0:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":720,"pivotY":0,"pivotX":0,"height":1280,"alpha":1},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"var":"box","height":1280},"child":[{"type":"Image","props":{"y":38,"x":622,"var":"mus_on","skin":"comp/icon_music_on2.png"}},{"type":"Image","props":{"y":38,"x":622,"var":"mus_off","skin":"comp/icon_music_off2.png"}},{"type":"Image","props":{"y":1227,"x":323,"var":"next","skin":"comp/icon_arrow2.png"}},{"type":"Image","props":{"y":167,"x":503,"var":"star1","skin":"comp/star1.png"}},{"type":"Image","props":{"y":715,"x":583,"var":"star3","skin":"comp/star3.png"}},{"type":"Image","props":{"y":111,"x":109,"var":"star4","skin":"comp/star4.png"}},{"type":"Image","props":{"y":974,"x":-58,"var":"star2","skin":"comp/star2.png"}},{"type":"Text","props":{"y":76,"x":166,"width":430,"text":"豆瓣阅读2019年好书推荐精选","height":34,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Image","props":{"y":0,"x":0,"var":"zdtj","skin":"comp/zbtj.png"}},{"type":"Image","props":{"y":-241,"x":27,"var":"book1","skin":"comp/shu2.png"}},{"type":"Image","props":{"y":-279,"x":175,"var":"book2","skin":"comp/shu1.png","rotation":0}},{"type":"Image","props":{"y":-315,"x":318,"var":"book3","skin":"comp/shu0.png"}},{"type":"Text","props":{"y":1289,"x":126,"width":509,"var":"t1","text":"加西亚.马尔克斯 [百年孤独] ,全球正式授权","height":34,"fontSize":25,"font":"Microsoft YaHei","color":"#ffffff","bold":false,"align":"center"}},{"type":"Text","props":{"y":1350,"x":109,"width":520,"var":"t2","text":"卡勒德.胡塞 [追风筝的人] ,全球正式授权","height":44,"fontSize":28,"font":"Microsoft YaHei","color":"#ffffff","bold":false,"align":"center"}},{"type":"Text","props":{"y":1399,"x":204,"width":361,"var":"t3","text":"余华 [活着] ,经典再次来袭","height":43,"fontSize":30,"font":"Microsoft YaHei","color":"#ffffff","bold":false,"align":"center"}},{"type":"Image","props":{"y":245,"x":113,"width":120,"var":"hao","skewY":0,"height":120},"child":[{"type":"Image","props":{"y":9,"x":10,"var":"h","skin":"comp/h.png"}},{"type":"Image","props":{"y":12,"x":16,"var":"h0","skin":"comp/h0.png"}}]},{"type":"Image","props":{"y":245,"x":248,"width":120,"var":"shu","height":120},"child":[{"type":"Image","props":{"y":9,"x":10,"var":"s","skin":"comp/s.png"}},{"type":"Image","props":{"y":12,"x":15,"var":"s0","skin":"comp/s0.png"}}]},{"type":"Image","props":{"y":245,"x":384,"width":120,"var":"tui","height":120},"child":[{"type":"Image","props":{"y":9,"x":10,"var":"t","skin":"comp/t.png"}},{"type":"Image","props":{"y":13,"x":15,"var":"t0","skin":"comp/t0.png"}}]},{"type":"Image","props":{"y":245,"x":519,"width":120,"var":"jian","height":120},"child":[{"type":"Image","props":{"y":9,"x":10,"var":"j","skin":"comp/j.png"}},{"type":"Image","props":{"y":12,"x":15,"var":"j0","skin":"comp/j0.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.bookUI.uiView);

        }

    }
}

module ui {
    export class book1UI extends View {
		public box:Laya.Image;
		public mus_on:Laya.Image;
		public mus_off:Laya.Image;
		public next:Laya.Image;
		public star1:Laya.Image;
		public star3:Laya.Image;
		public star4:Laya.Image;
		public star2:Laya.Image;
		public i0:Laya.Image;
		public i1:Laya.Image;
		public i2:Laya.Image;
		public i3:Laya.Image;
		public i4:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":720,"pivotY":0,"pivotX":0,"height":1280,"alpha":1},"child":[{"type":"Image","props":{"y":1280,"width":720,"var":"box","skin":"comp/black.png","sizeGrid":"3,3,3,3","height":1280},"child":[{"type":"Image","props":{"y":38,"x":622,"var":"mus_on","skin":"comp/icon_music_on2.png"}},{"type":"Image","props":{"y":38,"x":622,"var":"mus_off","skin":"comp/icon_music_off2.png"}},{"type":"Image","props":{"y":1230,"x":323,"var":"next","skin":"comp/icon_arrow2.png"}},{"type":"Image","props":{"y":167,"x":503,"var":"star1","skin":"comp/star1.png"}},{"type":"Image","props":{"y":715,"x":583,"var":"star3","skin":"comp/star3.png"}},{"type":"Image","props":{"y":111,"x":109,"var":"star4","skin":"comp/star4.png"}},{"type":"Image","props":{"y":974,"x":-58,"var":"star2","skin":"comp/star2.png"}},{"type":"Image","props":{"y":61,"x":-801,"var":"i0","skin":"book/i0.jpg"}},{"type":"Image","props":{"y":817,"x":722,"var":"i1","skin":"book/i1.jpg"}},{"type":"Image","props":{"y":285,"x":721,"var":"i2","skin":"book/i2.jpg"}},{"type":"Image","props":{"y":592,"x":-801,"var":"i3","skin":"book/i3.jpg"}},{"type":"Image","props":{"y":396,"x":0,"var":"i4","skin":"book/i4.jpg","alpha":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.book1UI.uiView);

        }

    }
}

module ui {
    export class book2UI extends View {
		public box:Laya.Image;
		public mus_on:Laya.Image;
		public mus_off:Laya.Image;
		public next:Laya.Image;
		public star1:Laya.Image;
		public star3:Laya.Image;
		public star4:Laya.Image;
		public star2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":720,"pivotY":0,"pivotX":0,"height":1280,"alpha":1},"child":[{"type":"Image","props":{"y":1280,"width":720,"var":"box","skin":"comp/black.png","sizeGrid":"3,3,3,3","height":1280},"child":[{"type":"Image","props":{"y":38,"x":622,"var":"mus_on","skin":"comp/icon_music_on2.png"}},{"type":"Image","props":{"y":38,"x":622,"var":"mus_off","skin":"comp/icon_music_off2.png"}},{"type":"Image","props":{"y":1230,"x":323,"var":"next","skin":"comp/icon_arrow2.png"}},{"type":"Image","props":{"y":167,"x":503,"var":"star1","skin":"comp/star1.png"}},{"type":"Image","props":{"y":715,"x":583,"var":"star3","skin":"comp/star3.png"}},{"type":"Image","props":{"y":111,"x":109,"var":"star4","skin":"comp/star4.png"}},{"type":"Image","props":{"y":974,"x":-58,"var":"star2","skin":"comp/star2.png"}},{"type":"Image","props":{"y":294,"x":1,"skin":"book/1.jpg"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.book2UI.uiView);

        }

    }
}

module ui {
    export class endUI extends View {
		public box:Laya.Image;
		public mus_on:Laya.Image;
		public mus_off:Laya.Image;
		public next:Laya.Image;
		public star1:Laya.Image;
		public star3:Laya.Image;
		public star4:Laya.Image;
		public star2:Laya.Image;
		public t:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":720,"pivotY":0,"pivotX":0,"height":1280,"alpha":1},"child":[{"type":"Image","props":{"y":1280,"width":720,"var":"box","skin":"comp/black.png","sizeGrid":"3,3,3,3","height":1280},"child":[{"type":"Image","props":{"y":38,"x":622,"var":"mus_on","skin":"comp/icon_music_on2.png"}},{"type":"Image","props":{"y":38,"x":622,"var":"mus_off","skin":"comp/icon_music_off2.png"}},{"type":"Image","props":{"y":1230,"x":323,"var":"next","skin":"comp/icon_arrow2.png"}},{"type":"Image","props":{"y":167,"x":503,"var":"star1","skin":"comp/star1.png"}},{"type":"Image","props":{"y":715,"x":583,"var":"star3","skin":"comp/star3.png"}},{"type":"Image","props":{"y":111,"x":109,"var":"star4","skin":"comp/star4.png"}},{"type":"Image","props":{"y":974,"x":-58,"var":"star2","skin":"comp/star2.png"}},{"type":"Text","props":{"y":354,"x":225,"width":258,"var":"t","text":"长按识别二维码","height":43,"fontSize":30,"font":"Microsoft YaHei","alpha":1,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.endUI.uiView);

        }

    }
}

module ui {
    export class loadingUI extends View {
		public progress:Laya.ProgressBar;
		public num:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":720,"height":1280},"child":[{"type":"ProgressBar","props":{"y":575,"x":91,"width":500,"var":"progress","skin":"comp/progress_loading.png","sizeGrid":"0,32,0,30","height":5}},{"type":"Text","props":{"y":581,"x":312,"width":22,"var":"num","text":"0","height":16,"color":"#0cb5ea","align":"right"}},{"type":"Text","props":{"y":581,"x":336,"width":13,"text":"%","height":16,"color":"#0cb5ea"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.loadingUI.uiView);

        }

    }
}
