module asgard.message
{
	export abstract class BaseMessage
	{
		protected _connectionFlag:number = 1;
		protected _dataLength:number;
		protected _bytes:laya.utils.Byte;

		protected returnMsg:any;

		public getreturnMsg():any
		{
			return this.returnMsg;
		}

		public setConnectionFlag(connectionFlag:number):void
		{
			this._connectionFlag=connectionFlag;
		}

		public get connectionFlag():number
		{
			return this._connectionFlag;
		}

		public encode():laya.utils.Byte {
			this._bytes = new laya.utils.Byte();
			this._bytes.endian=Laya.Byte.BIG_ENDIAN;
			this.onEncode();
			return this._bytes;
		}
		
		public decode(byteArray:laya.utils.Byte):void {
			// 读取消息数据
			this._bytes = byteArray;
			this.onDecode();
		 
		}
		
		
		
		public getByteArray():laya.utils.Byte {
			return this._bytes;
		}

		abstract getMessageType():number;
		
	//	abstract excute():void;
		
		public onEncode():void{

		}
		
		public onDecode():void{

		}

		/*
		 * 写入数据区域 
		 */
		protected writeBoolean(data:boolean):void {
			// 可能有数据反转的问题
			if(data==true)
				this._bytes.writeByte(1);
			else   
				this._bytes.writeByte(0);
		}
		
		protected writeByte(data:number):void {
			this._bytes.writeByte(data);
		}
		
		protected writeShort(data:number):void {
			this._bytes.writeInt16(data);
		}
		
		protected writeInt(data:number):void {
			this._bytes.writeInt32(data);
		}

		protected writeLong(data:number):void {
			this._bytes.writeInt32(data);
		}
		
		protected writeFloat(data:number):void {
			this._bytes.writeFloat32(data);
		}
		
		protected writeDouble(data:number):void {
			this._bytes.writeFloat64(data);
		}
		
		protected writeString(data:string):void {
			this._bytes.writeUTFString(data);
		}
		
		/*
		* 写入数据区域 
		*/
		protected readBoolean():boolean {
			return (this._bytes.getByte()>0.1);
		}
		
		protected readByte():number {
			return this._bytes.getByte();
		}
		
		protected readShort():number {
			return this._bytes.getInt16();
		}
		
		protected readInt():number {
			return this._bytes.getInt32();
		}

		protected readInt64():asgard.utils.Int64 {
			let lowV:number=this._bytes.getInt32();
			let highV:number=this._bytes.getInt32();
			return new asgard.utils.Int64(lowV,highV);
		}
		
		protected readFloat():number {
			return this._bytes.getFloat32();
		}
		
		protected readDouble():number {
			return this._bytes.getFloat64();
		}
		
		protected readString():string {
			return this._bytes.getUTFString();
		}
		public toString():string
		{
			return "";
		}
	}
}