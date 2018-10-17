module asgard.utils 
{
	export class Vector2 
	{
        public x:number=0.0;
        public y:number=0.0;

        constructor(x:number,y:number)
        {
            this.x=x;
            this.y=y;
        }
    }

    export class Vector3 
	{
        public x:number=0.0;
        public y:number=0.0;
        public z:number=0.0;

        constructor(x:number,y:number,z:number)
        {
            this.x=x;
            this.y=y;
            this.z=z;
        }
    }
}