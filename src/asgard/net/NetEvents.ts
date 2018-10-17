module asgard.net
{
	import Event=laya.events.Event;
	import Byte=laya.utils.Byte;
	import SimpleDelegate=asgard.utils.SimpleDelegate;

	export class NetEvents
	{
		private onConnected:SimpleDelegate;
		private onClose:SimpleDelegate;
		private onError:SimpleDelegate;
		private onMessageReceived:SimpleDelegate;

		constructor()
		{
		}

		public registerEventListener(actionType:string,caller:any,listener:Function):void
		{
			switch(actionType)
			{
				case Event.OPEN:
				    this.onConnected=new SimpleDelegate(caller,listener);
					break;
				case Event.CLOSE:
				    this.onClose=new SimpleDelegate(caller,listener);
					break;
				case Event.ERROR:
				    this.onError=new SimpleDelegate(caller,listener);
					break;
				case Event.MESSAGE:
				    this.onMessageReceived=new SimpleDelegate(caller,listener);
					break;
			}
		}

		public unregisterEventListener(actionType:string):void
		{
			switch(actionType)
			{
				case Event.OPEN:
				    this.onConnected=null;
					break;
				case Event.CLOSE:
				    this.onClose=null;
					break;
				case Event.ERROR:
				    this.onError=null;
					break;
				case Event.MESSAGE:
				    this.onMessageReceived=null;
					break;
			}
		}

        public connectedNotify():void
        {
            if(this.onConnected)
			{
				this.onConnected.apply();
			}
        }

        public closeNotify():void
		{
			if(this.onClose)
			{
				this.onClose.apply();
				console.log("SimpleSocket.closeHandler(), 数据连接关闭!");
			}
		}

		public errorNotify():void
		{
			if(this.onError)
			{
				this.onError.apply();
				console.log("SimpleSocket.errorHandler(), 数据连接错误!");
			}
		}

        public messageReceivedNotify(cmd:number, msgdata:Byte):void
		{
			if(this.onMessageReceived)
			{
				this.onMessageReceived.apply([cmd,msgdata]);
			}
		}

    }
}
