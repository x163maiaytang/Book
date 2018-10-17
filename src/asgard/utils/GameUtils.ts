module asgard.utils
{
	export class GameUtil
	{
        public static findChildNodeByName(childName:string,rootNode:Laya.Node,recrusion:boolean=false):Laya.Node
        {
            if(!childName || !rootNode)
                return  null;

            if(!recrusion)
                return rootNode.getChildByName(childName);
            else
            {
                //此处暂时使用深度优先策略
                var resultNode:laya.display.Node=null;
                for(var i:number=0;!resultNode && i<rootNode.numChildren;i++)
                {
                    var subNode:laya.display.Node=rootNode.getChildAt(i);
                    if(subNode.name==childName)
                    {
                        resultNode=subNode;
                    }
                    else
                    {
                        resultNode=GameUtil.findChildNodeByName(childName,subNode,recrusion);
                    }
                }
                return resultNode;
            }
        }

        public static fineNumber(v:number):string
        {
            if(!v || v<0)
                return "0";
            
            if(v<900)
                return Math.floor(v).toFixed(0);
            if(v<100000)
            {
                v=v*0.001;
                return v.toFixed(2)+"K"
            }
            else if(v<900000)
            {
                v=v*0.001;
                return v.toFixed(1)+"k"
            }
            else if(v<100000000)
            {
                v=v*0.000001;
                return v.toFixed(2)+"M"
            }
            else if(v<900000000)
            {
                v=v*0.000001;
                return v.toFixed(1)+"M"
            }
            else
            {
                v=v*0.000000001;
                return v.toFixed(2)+"G"
            }
        }

        public static fixedFormat(v:number,length:number):string
        {
            let str:string=(v)?v.toString():"";
            while(str.length<length)
            {
                str="0"+str;
            }
            return str;
        }

        public static catchUrlImage(imgurl:string,w:number,h:number,callback:Function):void
        {
            let catchSprite:Laya.Sprite=new Laya.Sprite();
            catchSprite.loadImage(imgurl,0,0,w,h);
            let h2:Laya.Handler=new Laya.Handler()
            var htmlC:Laya.HTMLCanvas =catchSprite.drawToCanvas(w,h,0,0);
            htmlC.toBase64("image/png",0.92,callback);
        }

        public static dateOfDay(date:Date):number
        {
            return Math.floor(date.getTime()/86400000);
        }

        public static weekdayOfDay(date:Date):number
        {
            return Math.floor(date.getTime()/604800000);
        }

        public static _zeroDate:number=Math.floor(new Date(2018,0,1,0,0,0).getTime()/86400000);
        public static dateOfDay2(date:Date):number
        {
            return Math.floor(date.getTime()/86400000)-GameUtil._zeroDate;
        }

        public static dayOfDate(day:number):Date
        {   
            let date:Date = new Date();
            date.setTime((day+GameUtil._zeroDate+1)*86400000);
            return date;
        }

        public static dateStrOfDate(date:number):string
        {
            let curDay:Date = asgard.utils.GameUtil.dayOfDate(date);
            let year:number = curDay.getFullYear();
            let month:number = curDay.getMonth() + 1;
            let day:number = curDay.getDate();
           
            return  year+ "/" + month + "/" + day;
        }

        public static formatTime(secondtime:number):string
        {
            if(secondtime>3600000)
            {
                let h:number=Math.floor(secondtime/3600000);
                let s:number=Math.floor((secondtime-h*3600000)/60000);
                let m:number=Math.floor((secondtime-h*3600000- s*60000)/1000);
                return asgard.utils.GameUtil.fixedFormat(h,2)+":"+
                       asgard.utils.GameUtil.fixedFormat(s,2)+":"+
                       asgard.utils.GameUtil.fixedFormat(m,2);
            }
            else if(secondtime>60000)
            {
                let s:number=Math.floor(secondtime/60000);
                let m:number=Math.floor((secondtime- s*60000)/1000);
                return asgard.utils.GameUtil.fixedFormat(s,2)+":"+
                       asgard.utils.GameUtil.fixedFormat(m,2);
            }
            else
            {
                let m:number=Math.floor(secondtime/1000);
                return "00:"+asgard.utils.GameUtil.fixedFormat(m,2)
            }
        }

    }
}