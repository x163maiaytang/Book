module asgard.net
{
    export class NetSession
	{
        private _connectionFlag:string;
        private _net:asgard.net.TCPClient;
        private _connectedNotify:asgard.utils.SimpleDelegate;
        private _messageNotify:asgard.utils.SimpleDelegate;

        constructor(connectionFlag:string)
        {
            this._connectionFlag = connectionFlag;
            this._net=new asgard.net.TCPClient();
            this._net.registerEventListener(laya.events.Event.OPEN,this,this.OnConnected);
            this._net.registerEventListener(laya.events.Event.MESSAGE,this,this.OnMsgReceive);
            this._connectedNotify=null;
        }

        public get ConnectionFlag():string
        {
            return this._connectionFlag;
        }

        public get IsConnected():boolean
        {
            return this._net.connected;
        }

        public setConnectedNotify(caller:any,handler:Function):void
        {
            this._connectedNotify=new asgard.utils.SimpleDelegate(caller,handler);
        }

        public setMessageNotify(caller:any,handler:Function):void
        {
            this._messageNotify=new asgard.utils.SimpleDelegate(caller,handler);
        } 

        public tryConnection(svrAddress:string,svrPort:number):void
        {
            this._net.connect(svrAddress,svrPort);
        }

        public tryConnectionByUrl(url:string):void
        {
            this._net.connectByUrl(url);
        }

        public OnConnected():void
        {
            if(this._connectedNotify)
            {
                this._connectedNotify.apply();
            }
        }

        public sendMessage(msgID:number,arraybuffer: any):void
        {
            let _bytes = new laya.utils.Byte();
			_bytes.endian=Laya.Byte.BIG_ENDIAN;
            _bytes.writeArrayBuffer(arraybuffer);
            this._net.sendMessages(msgID,_bytes);
            _bytes = null;
        }
        
        public OnMsgReceive(msgId:number,msgData:laya.utils.Byte):void
        {
            if(this._messageNotify)
            {
                this._messageNotify.apply([this._connectionFlag,msgId,msgData]);
            }
        }

    }

    export class NetManager
    {
        private static _sessions:Laya.Dictionary=new Laya.Dictionary();
        
        public static tryConnect(connectionFlag:string, svrAddress:string,svrPort:number,caller:any,onConnectedNotify:Function):NetSession
        {
            let session:NetSession;
            if(NetManager._sessions.indexOf(connectionFlag) < 0)
            {
                session = new NetSession(connectionFlag);
                session.setMessageNotify(asgard.message.MessageDispatcher,asgard.message.MessageDispatcher._onMessageNotify);
                NetManager._sessions.set(connectionFlag,session);
            }
            else
            {
                session = NetManager._sessions.get(connectionFlag);
            }

            if(session)
            {
                session.setConnectedNotify(caller,onConnectedNotify);
                session.tryConnection(svrAddress,svrPort);
            }
            return session;
        }

        public static tryConnectByUrl(connectionFlag:string, url:string ,caller:any,onConnectedNotify:Function):NetSession
        {
            let session:NetSession;
            if(NetManager._sessions.indexOf(connectionFlag) < 0)
            {
                session=new NetSession(connectionFlag);
                session.setMessageNotify(asgard.message.MessageDispatcher,asgard.message.MessageDispatcher._onMessageNotify);
                NetManager._sessions.set(connectionFlag,session);
            }
            else
            {
                session = NetManager._sessions.get(connectionFlag);
            }

            if(session)
            {
                session.setConnectedNotify(caller,onConnectedNotify);
                session.tryConnectionByUrl(url);
            }
            return session;
        }

        public static sendMessage(connectionFlag:string,msgID:number,arraybuffer: any):void
        {
            let session = NetManager._sessions.get(connectionFlag);
            if(session)
            {
                session.sendMessage(msgID,arraybuffer);
            }
        }
        
        public static IsConnected(connectionFlag:string):boolean
        {
            let session = NetManager._sessions.get(connectionFlag);
            if(session)
            {
                return session.IsConnected;
            }

            return false;
        }
    }
}