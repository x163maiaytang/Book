module asgard.stage
{
    export class BaseStage
	{
        protected _appName:string;
        protected _stageId:number;
        
        constructor(appname:string,stageId:number)
        {
            this._appName=appname;
            this._stageId=stageId;
        }

        public get appName():string
        {
            return this._appName;
        }

        public get stageId():number
        {
            return this._stageId;
        }

        public onEnter():void
        {
        }

        public onFrame(curtime: number,delta:number)
        {

        }

        public onExit():void
        {
        }
    }
}