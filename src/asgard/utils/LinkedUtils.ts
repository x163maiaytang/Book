module asgard.utils 
{
    enum NodeTYpe
    {
        First,
        Data,
        Last
    }
	class LinkedNode 
	{
        public Data:any;
        public PreNode:LinkedNode;
        public NextNode:LinkedNode;
        private _nodeType:NodeTYpe;

        constructor(nodetype:NodeTYpe)
        {
            this._nodeType=nodetype;
            this.Data=null;
            this.PreNode=null;
            this.NextNode=null;
        }

        public get NodeType():NodeTYpe
        {
            return this._nodeType;
        }
    }

    export class SimpleQueue
    {
        private _firstNode:LinkedNode;
        private _lastNode:LinkedNode;
        private _count:number;

        private static _POOL_SIZE:number=4;
        private _pool:Array<LinkedNode>;
        private _poolCount:number;
        
        constructor()
        {
            this._firstNode=new LinkedNode(NodeTYpe.First);
            this._lastNode=new LinkedNode(NodeTYpe.Last);
            this._firstNode.NextNode=this._lastNode;
            this._lastNode.PreNode=this._firstNode;
            this._count=0;

            this._pool=new Array<LinkedNode>(SimpleQueue._POOL_SIZE);
            this._poolCount=0;
        }

        public get Count():number
        {
            return this._count;
        }

        private _applyFreeNode():LinkedNode
        {
            let result:LinkedNode=null;
            for(let i:number=0;!result && i<SimpleQueue._POOL_SIZE;i++)
            {
                if(this._pool[i])
                {
                    result=this._pool[i];
                    this._pool[i]=null;
                    this._poolCount--;
                }
            }
            if(!result)
            {
                result=new LinkedNode(NodeTYpe.Data);
            }
            return result;
        }

        private _reclaimNode(node:LinkedNode):void
        {
            if(!node || this._poolCount>=SimpleQueue._POOL_SIZE)
                return;
            
            node.Data=null;
            node.NextNode=null;
            node.PreNode=null;

            for(let i:number=0;node && i<SimpleQueue._POOL_SIZE;i++)
            {
                if(!this._pool[i])
                {
                    this._pool[i]=node;
                    this._poolCount++;
                    node=null;
                }
            }
        }

        public enqueue(data:any):void
        {
            if(!data)
                return;

            let newNode:LinkedNode=this._applyFreeNode();
            newNode.Data=data;

            newNode.PreNode=this._lastNode.PreNode;
            newNode.NextNode=this._lastNode;

            this._lastNode.PreNode.NextNode=newNode;
            this._lastNode.PreNode=newNode;
            this._count++;
        }

        public dequeue():any
        {
            if(this._count<=0)
                return;
            
            let dataNode:LinkedNode=this._firstNode.NextNode;
            let data:any=dataNode.Data;

            dataNode.NextNode.PreNode=this._firstNode;
            this._firstNode.NextNode=dataNode.NextNode;
            this._count--;

            this._reclaimNode(dataNode);

            return data;
        }
    }

    export class SimpleList
    {
        private static _POOL_SIZE:number=4;

        private _firstNode:LinkedNode;
        private _lastNode:LinkedNode;
        private _count:number;

        private _pool:Array<LinkedNode>;
        private _poolCount:number;
        
        constructor()
        {
            this._firstNode=new LinkedNode(NodeTYpe.First);
            this._lastNode=new LinkedNode(NodeTYpe.Last);
            this._firstNode.NextNode=this._lastNode;
            this._lastNode.PreNode=this._firstNode;
            this._count=0;

            this._pool=new Array<LinkedNode>(SimpleList._POOL_SIZE);
            this._poolCount=0;
        }

        public clear():void
        {
            let dataNode:LinkedNode=this._firstNode.NextNode;
            let nextNode:LinkedNode;
            while(dataNode.NodeType!=NodeTYpe.Last)
            {
                nextNode=dataNode.NextNode;
                nextNode.PreNode=dataNode.PreNode;
                dataNode.PreNode.NextNode=nextNode;
                this._reclaimNode(dataNode);
                this._count--;

                dataNode=nextNode;
            }
        }

        public get Count():number
        {
            return this._count;
        }

        private _applyFreeNode():LinkedNode
        {
            let result:LinkedNode=null;
            for(let i:number=0;!result && i<SimpleList._POOL_SIZE;i++)
            {
                if(this._pool[i])
                {
                    result=this._pool[i];
                    this._pool[i]=null;
                    this._poolCount--;
                }
            }
            if(!result)
            {
                result=new LinkedNode(NodeTYpe.Data);
            }
            return result;
        }

        private _reclaimNode(node:LinkedNode):void
        {
            if(!node || this._poolCount>=SimpleList._POOL_SIZE)
                return;
            
            node.Data=null;
            node.NextNode=null;
            node.PreNode=null;

            for(let i:number=0;node && i<SimpleList._POOL_SIZE;i++)
            {
                if(!this._pool[i])
                {
                    this._pool[i]=node;
                    this._poolCount++;
                    node=null;
                }
            }
        }

        public add(data:any):void
        {
            if(!data)
                return;

            let newNode:LinkedNode=this._applyFreeNode();
            newNode.Data=data;

            newNode.PreNode=this._lastNode.PreNode;
            newNode.NextNode=this._lastNode;
            this._lastNode.PreNode.NextNode=newNode;
            this._lastNode.PreNode=newNode;
            this._count++;
        }

        public getFirstData():any
        {
            if(this._count>0)
            {
                let dataNode:LinkedNode=this._firstNode.NextNode;
                return dataNode.Data;
            }
            return null;
        }

        public getLastData():any
        {
            if(this._count>0)
            {
                let dataNode:LinkedNode=this._lastNode.PreNode;
                return dataNode.Data;
            }
            return null;
        }

        public getDataAt(idx:number):any
        {
            if(idx<0 || idx>=this._count)
                return null;
            
            let dataNode:LinkedNode=this._firstNode.NextNode;
            while(idx>0)
            {
                dataNode=dataNode.NextNode;
                idx--;
            }
            return dataNode.Data;
        }

        public removeAt(idx:number):any
        {
            if(idx<0 || idx>=this._count)
                return null;
            
            let dataNode:LinkedNode=this._firstNode.NextNode;
            while(idx>0)
            {
                dataNode=dataNode.NextNode;
                idx--;
            }
            let data:any=dataNode.Data;

            dataNode.NextNode.PreNode=dataNode.PreNode;
            dataNode.PreNode.NextNode=dataNode.NextNode;
            this._count--;

            this._reclaimNode(dataNode);

            return data;
        }

        public scan(caller: any,procss: Function):void
        {
            if(this._count<=0)
                return;
            
            let args:Array<any>=new Array<any>(1);
            let preNode:LinkedNode;
            let dataNode:LinkedNode=this._firstNode.NextNode;
            while(dataNode.NodeType==NodeTYpe.Data)
            {
                args[0]=dataNode.Data;
                if(!procss.apply(caller,args))
                {
                    preNode=dataNode.PreNode;
                    dataNode.NextNode.PreNode=dataNode.PreNode;
                    dataNode.PreNode.NextNode=dataNode.NextNode;
                    this._count--;

                    this._reclaimNode(dataNode);
                }
                else
                {
                    preNode=dataNode;
                }
                dataNode=preNode.NextNode;
            }
        }

        public search(caller: any,procss: Function,param:any):any
        {
            if(this._count<=0)
                return null;
            
            let result:any=null;
            let args:Array<any>=new Array<any>(2);
            let dataNode:LinkedNode=this._firstNode.NextNode;
            while(!result && dataNode.NodeType==NodeTYpe.Data)
            {
                args[0]=dataNode.Data;
                args[1]=param;
                if(procss.apply(caller,args))
                {
                    result=dataNode.Data;
                }
                dataNode=dataNode.NextNode;
            }
            return result;
        }

        public reverseSearch(caller: any,procss: Function):any
        {
            if(this._count<=0)
                return null;
            
            let result:any=null;
            let args:Array<any>=new Array<any>(1);
            let dataNode:LinkedNode=this._lastNode.PreNode;
            while(!result && dataNode.NodeType==NodeTYpe.Data)
            {
                args[0]=dataNode.Data;
                if(procss.apply(caller,args))
                {
                    result=dataNode.Data;
                }
                dataNode=dataNode.PreNode;
            }
            return result;
        }
    }
}