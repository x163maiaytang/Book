module asgard.events
{
    export class EventsDispatcher
	{
        private static _eventMap:laya.utils.Dictionary=new laya.utils.Dictionary();

        public static init(appname:string)
        {
            if(EventsDispatcher && EventsDispatcher._eventMap.indexOf(appname)<0)
            {
                let eventIdMap:laya.utils.Dictionary=new laya.utils.Dictionary();
                EventsDispatcher._eventMap.set(appname,eventIdMap);
            }
        }

        public static registerEventListener(appname:string,eventid:number,listener:any,action:Function)
        {
            let eventIdMap:laya.utils.Dictionary = EventsDispatcher._eventMap.get(appname) as laya.utils.Dictionary;
            if(eventIdMap && eventid>0 && listener && action)
            {
                var listenerList:asgard.utils.SimpleDelegates = eventIdMap.get(eventid) as asgard.utils.SimpleDelegates;
                if(!listenerList)
                {
                    listenerList=new asgard.utils.SimpleDelegates();
                    eventIdMap.set(eventid,listenerList);
                } 
                listenerList.tryAddDelegate(listener,action);
            }
        }

        public static unregisterEventListener(appname:string,eventid:number,listener:any,action:Function)
        {
            let eventIdMap:laya.utils.Dictionary = EventsDispatcher._eventMap.get(appname) as laya.utils.Dictionary;
            if(eventIdMap && eventid>0 && listener && action)
            {
                var listenerList:asgard.utils.SimpleDelegates = eventIdMap.get(eventid) as asgard.utils.SimpleDelegates;
                if(listenerList)
                {
                    listenerList.removeDelegate(listener,action);
                } 
            }
        }

        public static eventNotify(appname:string,eventid:number,arg?:Array<any>)
        {
            let eventIdMap:laya.utils.Dictionary = EventsDispatcher._eventMap.get(appname) as laya.utils.Dictionary;
            if(eventIdMap && eventid>0)
            {
                var listenerList:asgard.utils.SimpleDelegates = eventIdMap.get(eventid) as asgard.utils.SimpleDelegates;
                if(listenerList)
                {
                    if(arg)
                        listenerList.invokeDelegate(arg);
                    else
                        listenerList.invokeDelegate();
                } 
            }
        }

    }
}