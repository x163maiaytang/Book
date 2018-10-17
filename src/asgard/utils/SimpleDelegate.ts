module asgard.utils
{
	export class SimpleDelegate
	{
        private _caller: any;
        private _method: Function;

        constructor(caller:any,method:Function)
        {
            this._caller=caller;
            this._method=method;
        }

        public setMethod(caller:any,method:Function):void
        {
            this._caller=caller;
            this._method=method;
        }

        public isSameMethod(caller:any,method:Function):boolean
        {
            return (this._caller && this._caller==caller && this._method && this._method==method);
        }

        public apply(args?: Array<any>):any
        {
            if(this._method)
            {
                return this._method.apply(this._caller,args);
            }
            return null;
        }
	}
}