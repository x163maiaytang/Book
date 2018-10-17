module asgard.net
{
	import Event=laya.events.Event;
	import Browser=laya.utils.Browser;
	import Byte=laya.utils.Byte;
	import SimpleDelegate=asgard.utils.SimpleDelegate;

	export class TCPClient
	{
		protected _socket:SimpleSocket;

		private _events:NetEvents;

		constructor()
		{
			this._events=new NetEvents();
			this.init();
			
			//TODO 时间紧迫 先放着
			//Laya.stage.on(Event.BLUR, this, this.onBlur);
			//Laya.stage.on(Event.VISIBILITY_CHANGE, this, this.onVisibilityReconnect);
		}

		public registerEventListener(actionType:string,caller:any,listener:Function):void
		{
			this._events.registerEventListener(actionType,caller,listener);
		}

		public unregisterEventListener(actionType:string):void
		{
			this._events.unregisterEventListener(actionType);
		}
		
		private onBlur():void
		{
			console.log("失去焦点");
		}
		
		
		/**
		 *切换状态 
		 * 
		 */		
		private onVisibilityReconnect():void
		{
			console.log("可见性变化");
			if(Laya.stage.isVisibility)
			{
				if(!this._socket.getConnected())
				{
					Browser.window.location.reload(); 
				}				
			}
		}
		
		
		public init():void
		{
			this._socket =new SimpleSocket();
			this._socket.setEvents(this._events);
		}

		public connect(host:string, port:number):void
		{
			if(!this._socket)
			{
				this.init();
			}
			if(!this._socket.getConnected()){
				this._socket.connect(host, port);
			}
		}

		
		public connectByUrl(url:string):void
		{
			if(!this._socket)
			{
				this.init();
			}
			if(!this._socket.getConnected()){
				this._socket.connectByUrl(url);
			}
		}

		public get connected():boolean
		{
			return this._socket ? this._socket.getConnected() : false;
		}

		public sendMessages(cmd:number, body:Byte):void
		{
			if(this._socket && this._socket.getConnected())
			{
				if(Laya.stage.isVisibility)
				{
					this._socket.sendPackage(cmd, body);
				}				
				
			}
			else
			{
				//炉钩子 暂时关闭重置连接
				if(this._socket && this._socket.getConnected() == false)
				{
//					_socket.connect(ServerConst.ip, ServerConst.port);
					//this.BrowserManager.refresh();				
				}
			}
		}

		public close():void
		{
			if(this._socket && this._socket.getConnected())
			{
				this._socket.close();
			}
		}
		/**
		 *  废掉socket，再使用重新创建
		 * 
		 */		
		public unUseFul():void{
			close();
			this._socket = null;
		}
		
		public hadSocket():boolean{
			if(this._socket){
				return true;
			}else{
				return false;
			}
		}
		
		/**
		 * 清空未解析完的消息 
		 * @return 
		 * 
		 */
		public clearRecvArray():void {
			if(this._socket){
				this._socket.clearRecvArray();
			}
		}
		
		/**
		 * 子类MessageManager重写了此方法
		 */
		public onConnect():void 
		{
			this._events.connectedNotify();
		}
		
		/**
		 * 子类MessageManager重写了此方法
		 */
		public onMessageReceived(messageType:number, bytes:Byte):void 
		{
			this._events.messageReceivedNotify(messageType,bytes);
		}
		
		/**
		 * 处理链接断开
		 */
		public onDisConnect():void {
			this.onLoseConnectionWithServer();
		}

		/**
		 * 处理链接错误
		 */
		public onConnectError():void {
			//lbw//LogManager.getInstance().printLog(LogLevel.DEBUG,"链接服务器失败IOError");
			//			PromptInfo.showContent(LocalManager.getString(337));
			this.showErrorMessageContent();
			this.receiveIOError();
			//MaskLoading.show(MaskLoadingType.LOSSCONNECT_WAIT);
		}

		/**
		 * 处理数据链接IO错误
		 */
		private receiveIOError():void
		{
			close();
			this.onLoseConnectionWithServer();
		}
		
		private showErrorMessageContent():void
		{
			// TODO 显示连接失败信息
			//PromptInfo.showContent(LocalManager.getString(337));
		}
		
		/**断开连接后*/
		private onLoseConnectionWithServer():void
		{
			if(Laya.stage.isVisibility)
			{
				if(!this._socket.getConnected())
				{
					console.log("连接断开");
					Browser.window.location.reload(); 
				}				
			}
		}
	}
}
