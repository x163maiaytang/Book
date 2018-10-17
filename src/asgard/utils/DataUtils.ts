module asgard.utils
{
	export class DataUtil
	{
        public static readBoolean(indata:Laya.Byte):boolean
		{
			return (indata.getByte()>0.1);
		}
		
		public static readByte(indata:Laya.Byte):number 
		{
			return indata.getByte();
		}
		
		public static readShort(indata:Laya.Byte):number 
		{
			return indata.getInt16();
		}
		
		public static readInt(indata:Laya.Byte):number 
		{
			return indata.getInt32();
		}

		public static readInt64(indata:Laya.Byte):asgard.utils.Int64 
		{
			let lowV:number=indata.getInt32();
			let highV:number=indata.getInt32();
			return new asgard.utils.Int64(lowV,highV);
		}
		
		public static readFloat(indata:Laya.Byte):number 
		{
			return indata.getFloat32();
		}
		
		public static readDouble(indata:Laya.Byte):number 
		{
			return indata.getFloat64();
		}
		
		public static readString(indata:Laya.Byte):string 
		{
			return indata.getUTFString();
		}
    }
}