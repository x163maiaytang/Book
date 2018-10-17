module asgard.message
{
    export class MessageDispatcher
	{
        private static _messageFactory:Laya.Dictionary=new Laya.Dictionary();
        
        public static init(messageFactory:asgard.message.IMessageFactory):void
        {
            if(messageFactory && MessageDispatcher._messageFactory.indexOf(messageFactory.getAppName())<0)
            {
                MessageDispatcher._messageFactory.set(messageFactory.getAppName(),messageFactory);
                messageFactory.init();
            }
        }

        public static clear():void
        {
        }

        public static _onMessageNotify(connectionFlag:string,msgId:number,msgData:laya.utils.Byte):void
        {
            let messagefactory:asgard.message.IMessageFactory=MessageDispatcher._messageFactory.get(connectionFlag);
            if(messagefactory)
            {
                let msgDelg:asgard.utils.SimpleDelegate = messagefactory.getMessage(msgId);
                if(msgDelg)
                {
                    let length:number = msgData.length;
                    let reader : protobuf.Reader = new protobuf.Reader(msgData.getUint8Array(0, length))
                    let returnMsg:any = msgDelg.apply([reader, length]);    //decode

                    let handler:asgard.utils.SimpleDelegate = messagefactory.getHandler(msgId);
                    handler.apply([returnMsg]); //回调
                }
                else
                {
                    throw new Error("Unsupported msg:"+msgId);
                }
            }
        }

    }
}