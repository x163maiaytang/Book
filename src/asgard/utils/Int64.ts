module asgard.utils 
{
	export class Int64 
	{
		public low:number = 0;
		public high:number = 0;
		
		constructor(low:number=0,high:number=0) 
		{
			this.low = low;
			this.high = high;
		}
		
		public equal(v:Int64):boolean
        {
			if (v)
                return (v.low == this.low) && (v.high == this.high);
            else
                return false;
		}
		
		public isZero():boolean {
			return this.low == 0 && this.high == 0;
		}
		
		public toString():string 
        {
			return "high:0x" + this.high.toString(16)+" low:0x" + this.low.toString(16);
		}
		
	}
}