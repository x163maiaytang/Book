var asgard;
(function (asgard) {
    var events;
    (function (events) {
        var EventsDispatcher = /** @class */ (function () {
            function EventsDispatcher() {
            }
            EventsDispatcher.init = function (appname) {
                if (EventsDispatcher && EventsDispatcher._eventMap.indexOf(appname) < 0) {
                    var eventIdMap = new laya.utils.Dictionary();
                    EventsDispatcher._eventMap.set(appname, eventIdMap);
                }
            };
            EventsDispatcher.registerEventListener = function (appname, eventid, listener, action) {
                var eventIdMap = EventsDispatcher._eventMap.get(appname);
                if (eventIdMap && eventid > 0 && listener && action) {
                    var listenerList = eventIdMap.get(eventid);
                    if (!listenerList) {
                        listenerList = new asgard.utils.SimpleDelegates();
                        eventIdMap.set(eventid, listenerList);
                    }
                    listenerList.tryAddDelegate(listener, action);
                }
            };
            EventsDispatcher.unregisterEventListener = function (appname, eventid, listener, action) {
                var eventIdMap = EventsDispatcher._eventMap.get(appname);
                if (eventIdMap && eventid > 0 && listener && action) {
                    var listenerList = eventIdMap.get(eventid);
                    if (listenerList) {
                        listenerList.removeDelegate(listener, action);
                    }
                }
            };
            EventsDispatcher.eventNotify = function (appname, eventid, arg) {
                var eventIdMap = EventsDispatcher._eventMap.get(appname);
                if (eventIdMap && eventid > 0) {
                    var listenerList = eventIdMap.get(eventid);
                    if (listenerList) {
                        if (arg)
                            listenerList.invokeDelegate(arg);
                        else
                            listenerList.invokeDelegate();
                    }
                }
            };
            EventsDispatcher._eventMap = new laya.utils.Dictionary();
            return EventsDispatcher;
        }());
        events.EventsDispatcher = EventsDispatcher;
    })(events = asgard.events || (asgard.events = {}));
})(asgard || (asgard = {}));
//# sourceMappingURL=EventsDispatcher.js.map