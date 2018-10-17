module asgard.utils
{
    export class MathUtils
    {
        public static EPSILON:number = 0.00001;
        public static Rad2Deg:number=180/Math.PI;
        public static Deg2Rad:number=Math.PI/180;

        public static PI:number = Math.PI;
        public static TWO_PI:number = 2.0 * Math.PI;
        public static HALF_PI:number = 0.5 * Math.PI;
        public static ONE_HALF_PI:number = 1.5 * Math.PI;

        public static shuffle<T>(objects:any[], num:number):any[]
        {
            var size:number = objects.length;
            var index0:number;
            var index1:number;
            var temp:any;
            if (num == -1)
                num = size;
            for (var i:number = 0; i < num; i++)
            {
                index0 = Math.random()*size;
                index1 = Math.random()*size;

                if (index0 == index1)
                    continue;

                //交换
                temp = objects[index0];
                objects[index0] = objects[index1];
                objects[index1] = temp;
            }

            return objects;
        }

        public static sqrt(w:number):number
        {
            var b:number = w * 0.25;
            var a:number, c:number;
            do
            {
                c = w / b;
                b = (b + c) * 0.5;
                a = b - c;
                if (a < 0)
                    a = -a;
            }
            while (a > 0.00001);
            return b;
        }

        //****************************
        /**
         * 有效偏移判断
         * 
         * @param p1x
         * @param p1y
         * @param p2x
         * @param p2y
         * @param scopex
         * @param scopey
         * @return
         */
        public static inScope(p1x:number,  p1y:number,  p2x:number,  p2y:number,  scopex:number,  scopey:number):boolean
        {
            return (Math.abs(p1x - p2x) < scopex && Math.abs(p1y - p2y) < scopey);
        }

        /**
         * 两点之间快速距离计算
         * 
         * @param p1x
         * @param p1y
         * @param p2x
         * @param p2y
         * @return
         */
        public static fastApproxDistance(p1x:number, p1y:number, p2x:number, p2y:number):number
        {
            p1x = (p1x > p2x) ? (p1x - p2x) : (p2x - p1x);
            p1y = (p1y > p2y) ? (p1y - p2y) : (p2y - p1y);
            return (p1x > p1y) ? (p1x + 0.43 * p1y) : (p1y + 0.43 * p1x);
        }

        /**
         * 两点之间快速距离计算
         * 
         * @param p1x
         * @param p1y
         * @param p2x
         * @param p2y
         * @return
         */
        public static fastApproxDeltaDistance(deltax:number, deltay:number):number
        {
            deltax = (deltax > 0) ? deltax : -deltax;
            deltay = (deltay > 0) ? deltay : -deltay;
            return (deltax > deltay) ? (deltax + 0.43 * deltay) : (deltay + 0.43 * deltax);
        }

        /**
         * 计算atan2角度
         * 
         * @param deltax
         * @param deltay
         * @return
         */
        public static atan2(deltax:number,  deltay:number):number
        {
            if (Math.abs(deltax) > MathUtils.EPSILON)
                return Math.atan2(deltay, deltax);
            else
            {
                if (deltay > 0)
                    return MathUtils.HALF_PI;
                else
                    return -MathUtils.HALF_PI;
            }
        }

        public static LerpFloat(from:number, to:number,  factor:number):number
        {
            if (factor < 0)
                return from;
            else if (factor >= 1.0)
                return to;
            else
                return from + (to - from) * factor;
        }

        public static lerp(current:number, to:number, speed:number,  deltaTime:number):number
        {
            if (current - to > MathUtils.EPSILON || to - current > MathUtils.EPSILON)
            {
                deltaTime = speed * deltaTime;
                if (to > current)
                {
                    if (deltaTime > 0)
                        current += deltaTime;
                    else
                        current -= deltaTime;

                    if (to - current < MathUtils.EPSILON)
                        current = to;
                }
                else
                {
                    if (deltaTime > 0)
                        current -= deltaTime;
                    else
                        current += deltaTime;

                    if (current - to < MathUtils.EPSILON)
                        current = to;
                }
            }
            return current;
        }

        public static lerpDelta(current:number, to:number, delta:number):number
        {
            if (current - to > MathUtils.EPSILON || to - current > MathUtils.EPSILON)
            {
                if (to > current)
                {
                    if (delta > 0)
                        current += delta;
                    else
                        current -= delta;

                    if (to - current < MathUtils.EPSILON)
                        current = to;
                }
                else
                {
                    if (delta > 0)
                        current -= delta;
                    else
                        current += delta;

                    if (current - to < MathUtils.EPSILON)
                        current = to;
                }
            }
            return current;
        }

        public static regularDirection(direction:number):number
        {
            if (direction >= MathUtils.TWO_PI)
            {
                while (direction >= MathUtils.TWO_PI)
                {
                    direction -= MathUtils.TWO_PI;
                }
            }
            else if (direction < 0)
            {
                while (direction < 0)
                {
                    direction += MathUtils.TWO_PI;
                }
            }
            return direction;
        }

        public static approximately(f1:number, f2:number):boolean
        {
            return (Math.abs(f1 - f2) < MathUtils.EPSILON);
        }

        public static approximatelyVector3(v3:laya.d3.math.Vector3, px:number, py:number,pz:number):boolean
        {
            return (Math.abs(v3.x - px) < MathUtils.EPSILON && 
                    Math.abs(v3.y - py) < MathUtils.EPSILON && 
                    Math.abs(v3.z - pz) < MathUtils.EPSILON);
        }

        public static copyVector3(src:laya.d3.math.Vector3,target:laya.d3.math.Vector3):void
        {
            if(src && target)
            {
                target.x=src.x;
                target.y=src.y;
                target.z=src.z;
            }
        }

        public static exportVector3Log(src:laya.d3.math.Vector3):void
        {
            console.log("vector3 x="+src.x+",y="+src.y+",z="+src.z);
        }

        public static approaching(curv:number,targetv:number,step:number):number
        {
            if(step<0)
            {
                step=-step;
            }  
            if(targetv>curv)
            {
                curv+=step;
                if(Math.abs(curv - targetv) < MathUtils.EPSILON)
                {
                    curv=targetv;
                }    
            }
            else if(targetv<curv)
            {
                curv-=step;
                if(Math.abs(curv - targetv) < MathUtils.EPSILON)
                {
                    curv=targetv;
                }  
            }
            return curv;
        }

    }
}
