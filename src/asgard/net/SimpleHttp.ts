namespace asgard.net
{
    export class SimpleHttp
    {
        private _http: Laya.HttpRequest;
        private _taskHandler:asgard.utils.SimpleDelegate;

        private _status:number;
        private _responseText:string;
        
        constructor() 
        {
        }

        public get Status():number
        {
            return this._status;
        }

        public get ResponseText():string
        {
            return this._responseText;
        }

        public postRequest(url:string,postdata:string,caller:any,callback:Function,timeout:number=10000, headers?: Array<any>):void
        {
            if(!url)
                return;

            this._taskHandler=new asgard.utils.SimpleDelegate(caller,callback);

            this._http = new Laya.HttpRequest();
            this._http.http.timeout = timeout;
            this._http.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
            this._http.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
            this._http.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            this._http.send(url, postdata, "post", "text", headers);
        }

        public getRequest(url:string,caller:any,callback:Function,timeout:number=10000):void
        {
            if(!url)
                return;

            this._taskHandler=new asgard.utils.SimpleDelegate(caller,callback);

            this._http = new Laya.HttpRequest();
            this._http.http.timeout = timeout;
            this._http.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
            this._http.once(Laya.Event.COMPLETE, this, this.onHttpRequestComplete);
            this._http.once(Laya.Event.ERROR, this, this.onHttpRequestError);
            
            this._http.send(url, null, "get", "text");
        }

        private onHttpRequestError(e: any): void 
        {
            this._status=-1;
            this._responseText=e;
            this._notifyHandle();
		}

		private onHttpRequestProgress(e: any): void 
        {
			console.log("http precess "+e)
		}

		private onHttpRequestComplete(e: any): void 
        {
            this._status=0;
            this._responseText=this._http.data; 
            console.log(this._responseText);
            this._notifyHandle();
		}

        private _notifyHandle():void
        {
            if(this._taskHandler)
            {
                this._taskHandler.apply([this._responseText, this._status]);
            }
        }
    }
}