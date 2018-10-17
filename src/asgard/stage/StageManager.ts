module asgard.stage
{
    export class StageManager
	{
        private static _curStage:Laya.Dictionary=new Laya.Dictionary();
        private static _stageFactory:Laya.Dictionary=new Laya.Dictionary();
        private static _lastStageId:Laya.Dictionary=new Laya.Dictionary(); 

        public static init(stageFactory:IStageFactory):void
        {
            this._curStage=new Laya.Dictionary();
            
            if(stageFactory && this._stageFactory.indexOf(stageFactory.getAppName())<0)
            {
                this._stageFactory.set(stageFactory.getAppName(),stageFactory);
            }
        }

        public static LastStageId(appname:string):number
        {
            return this._lastStageId.get(appname);
        }

        public static CurStage(appname:string):BaseStage
        {
            return this._curStage.get(appname);
        }

        public static enterStage(appname:string,stageid:number):void
        {
            let state:BaseStage = this._curStage.get(appname);
            if(state)
            {
                this._lastStageId.set(appname,state.stageId);
                state.onExit();
                this._curStage.set(appname,null);
            }

            let stagefactory:IStageFactory=this._stageFactory.get(appname);
            if(stagefactory)
            {
                let loginState = stagefactory.getStage(stageid);
                this._curStage.set(appname,loginState);
                if(loginState)
                {
                    loginState.onEnter();
                }
            }
        }

        public static onFrame(curtime:number,delta:number):void
        {
            for(let v of this._curStage.keys)
            {
                let state:BaseStage = this._curStage.get(v);
                if(state)
                {
                    state.onFrame(curtime,delta);
                }
            }
        }
    }
}