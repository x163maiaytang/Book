module asgard.net
{

    import Event = Laya.Event;
	import Socket = Laya.Socket;
	import Byte = Laya.Byte;
	import SimpleDelegate=asgard.utils.SimpleDelegate;

	export class SimpleSocket
	{
		static BYTE_ORDER: string=Laya.Byte.BIG_ENDIAN;
		private socket:Socket;
		
		private outputBuffer:Byte;
		private inputBuffer:Byte;
		private msgBuffer:Byte;
		
		private _events:NetEvents;

		constructor()
		{
			this.init();
		}

		public getEvents():NetEvents
		{
			return this._events;
		}
		
		public setEvents(nv:NetEvents):void
		{
			this._events=nv;
		}

		/**
		 * 是否为连接状态 
		 * @return 
		 * 
		 */		
		public getConnected():boolean
		{
			return this.socket.connected;
		}

		
		public connect(host:string, port:number):void//地址+ip   lbw
		{
			console.log("GameSocket.connect()");
			this.resetConnect();
			this.socket.connect(host,port);
		}

		public connectByUrl(url:string):void//地址+ip   lbw
		{
			console.log("GameSocket.connect()");
			this.resetConnect();
			this.socket.connectByUrl(url);
		}
		
		/**
		 * 使接口可用，并且客户端不主动断开连接 
		 * 
		 */		
		public close():void
		{
			if(this.socket && this.socket.connected){
				this.socket.close();
			}
		}
		
		private init():void
		{
			this.socket = new Socket();
			this.socket.endian = SimpleSocket.BYTE_ORDER;
			this.socket.on(Event.OPEN, this, this.connectHandler);
			this.socket.on(Event.CLOSE, this, this.closeHandler);
			this.socket.on(Event.MESSAGE, this, this.socketDataHandler);
			this.socket.on(Event.ERROR, this, this.errorHandler);
			
			this.outputBuffer = new Byte();
			this.outputBuffer.endian = SimpleSocket.BYTE_ORDER;
			this.inputBuffer = new Byte();
			this.inputBuffer.endian = SimpleSocket.BYTE_ORDER;
			this.msgBuffer = new Byte();
			this.msgBuffer.endian = SimpleSocket.BYTE_ORDER;
		}
		
		/**
		 * 
		 *重置网络连接
		 * 
		 */		
		private resetConnect():void
		{
			this.socket.off(Event.OPEN, this, this.connectHandler);
			this.socket.off(Event.CLOSE, this, this.closeHandler);
			this.socket.off(Event.ERROR, this, this.errorHandler);
			this.socket.off(Event.MESSAGE, this, this.socketDataHandler);
			this.socket = null;
			this.outputBuffer = null;
			this.inputBuffer = null;
			this.msgBuffer = null;

			this.init();
		}

		public sendPackage(cmd:number, body:Byte):void
		{			
			if(!this.socket.connected){
				console.log("GameSocket.sendPackage(), 无连接");
				return;
			}
			
			body.pos=0;

			this.outputBuffer.clear();
			this.outputBuffer.writeUint32(body.length + 8);
			this.outputBuffer.writeUint32(cmd);
			this.outputBuffer.writeArrayBuffer(body.buffer);
			this.outputBuffer.pos = 0;
		    console.log("Send cmd = " + cmd + ", bytes.leng = " + body.length);
			
			this.socket.output.writeArrayBuffer(this.outputBuffer.buffer);
			this.socket.flush();		
			this.outputBuffer.clear();	
		}

		private connectHandler(e_:Event):void
		{
			this._events.connectedNotify();
		}

		private closeHandler(e_:Event):void
		{
			if(this._events)
			{
				this._events.closeNotify();
				console.log("SimpleSocket.closeHandler(), 数据连接关闭!");
			}
		}

		private errorHandler(e_:Event):void
		{
			if(this._events)
			{
				this._events.errorNotify();
				console.log("SimpleSocket.errorHandler(), 数据连接错误!");
			}
		}

		/**
		 * 清空未解析完的消息 
		 */
		public clearRecvArray():void{
		//	console.log(LogLevel.DEBUG,"清空RecvArray");
			if(this.inputBuffer){				
				this.inputBuffer.clear();
				this.inputBuffer = new Byte();
			}
			if(this.msgBuffer){				
				this.msgBuffer.clear();
				this.msgBuffer = new Byte();
			}
		}
		
		

		private socketDataHandler(msg:any):void
		{
			console.log("GameSocket.socketDataHandler");
			try{
				let len:number;
				let cmd:number; 
				let pos:number;
				let leftSize:number;
				this.inputBuffer.writeArrayBuffer(msg);
				
//				console.log("Socket  receive data length ＝ " + cache.length);
				this.inputBuffer.pos = 0;
				while( this.inputBuffer.bytesAvailable >= 8 ) 
				{
					len = this.inputBuffer.getInt32();
					if(len<8)
					{
						cmd = this.inputBuffer.getInt32();
						this.inputBuffer.length=0;
						alert("数据长度为0了 , 协议号为： "+cmd);
						return;
					}
					if( len-4 <= this.inputBuffer.bytesAvailable ) 
					{
						cmd = this.inputBuffer.getInt32();
						this.msgBuffer.clear();
						this.msgBuffer.writeArrayBuffer(this.inputBuffer.buffer,this.inputBuffer.pos,len-8);
						pos=this.inputBuffer.pos+len-8;
						leftSize=this.inputBuffer.length-pos;
						this.inputBuffer.pos=0;
						if(leftSize>0)
						{
							this.inputBuffer.writeArrayBuffer(this.inputBuffer.buffer,pos,this.inputBuffer.length);
							this.inputBuffer.length=leftSize;
						}
						else
						{
							this.inputBuffer.length=0;
						}
						// 把ByteArray丢给MessageManager解析
						this.msgBuffer.pos=0;

						if(this._events)
						{
							this._events.messageReceivedNotify(cmd, this.msgBuffer);
						}
						
						this.msgBuffer.clear();
					}
					else
					{
						break;
					}
				}
			} catch(Error)
			{
				//TODO send error all
				console.log("error = " , Error.message);
			}
		}
	}
}