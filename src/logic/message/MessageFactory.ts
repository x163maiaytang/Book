module logic
{
 
    export class MessageFactory implements asgard.message.IMessageFactory
    {
        private messageMap:laya.utils.Dictionary = new laya.utils.Dictionary();
        private handlerMap:laya.utils.Dictionary = new laya.utils.Dictionary();
    
        public getAppName():string
        {
            return GameConst.APP_NAME;
        }

        private registMessage(msgId:number, msgHandler:any,msgMethod:Function, handler:any, processMethod:Function):void{
            if(msgHandler && msgId>0)
            {
                let msgDelg:asgard.utils.SimpleDelegate=new asgard.utils.SimpleDelegate(msgHandler,msgMethod);
                this.messageMap.set(msgId,msgDelg);

                let msgProcessDelg:asgard.utils.SimpleDelegate=new asgard.utils.SimpleDelegate(handler,processMethod);
                this.handlerMap.set(msgId,msgProcessDelg);
            }
            else
            {
                throw new Error("Unsupported type!");
            }
        }

        public getMessage(msgId:number):asgard.utils.SimpleDelegate{
            return this.messageMap.get(msgId);
        }

        public getHandler(msgId:number):asgard.utils.SimpleDelegate{
            return this.handlerMap.get(msgId);
        }

        public init()
        {
            let _accountModule:logic.GameModule = asgard.module.ModuleManager.getModule(GameConst.APP_NAME,logic.ModuleType.MODULE_ACCOUNT) as logic.GameModule;

            // this.registMessage(awesome.MSGID.PACKET_SC_LOGIN, awesome.SC_LOGIN,awesome.SC_LOGIN.decode, _accountModule, _accountModule.RecvLoginPushServerMsg);
        }
           
    }
}