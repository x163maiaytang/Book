module asgard.module
{
    export class BaseModule
	{
        protected _appName:string;
        protected _moduleId:number;

        constructor(appname:string,moduleId:number)
        {
            this._appName=appname;
            this._moduleId=moduleId;
        }

        public get appName():string
        {
            return this._appName;
        }

        public get moduleId():number
        {
            return this._moduleId;
        }
		
    }
}