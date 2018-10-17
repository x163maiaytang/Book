module asgard.utils
{
    export class SimpleDelegates
	{
        private _delegates:Array<SimpleDelegate>;

        constructor()
        {
            this._delegates=new Array<SimpleDelegate>();
        }

        public getCount():number
        {
            return this._delegates.length;
        }

        public getItem(index:number):SimpleDelegate
        {
            if(index>=0 && index<this._delegates.length)
                return this._delegates[index];
            else
                return null;
        }

        public tryAddDelegate(caller:any,process:Function):boolean
        {
            if(!caller || !process)
            {
                return false;
            }

            var delg:SimpleDelegate;
            let count=this._delegates.length;
            for(let i:number=0;i<count;i++)
            {
                delg=this._delegates[i];
                if(delg && delg.isSameMethod(caller,process))
                {
                    return false;
                }   
            }

            delg=new SimpleDelegate(caller,process);
            this._delegates.push(delg);
        }

        public removeDelegate(caller:any,process:Function):void
        {
            if(!caller || !process)
            {
                return;
            }

            var delgIndex:number=-1;
            var delg:SimpleDelegate;
            let count=this._delegates.length;
            for(let i:number=0;i<count && delgIndex<0;i++)
            {
                delg=this._delegates[i];
                if(delg && delg.isSameMethod(caller,process))
                {
                    delgIndex=i;
                }   
            }

            if(delgIndex>=0)
            {
                this._delegates.splice(delgIndex,1);
            }
        }

        public invokeDelegate(arg?:Array<any>):void
        {
            var delg:SimpleDelegate;
            let count=this._delegates.length;
            for(let i:number=0;i<count;i++)
            {
                delg=this._delegates[i];
                if(delg)
                {
                    if(arg)
                        delg.apply(arg);
                    else
                        delg.apply();
                }   
            }
        }
    }
}