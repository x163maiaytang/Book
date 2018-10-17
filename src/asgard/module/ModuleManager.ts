module asgard.module
{
    export class ModuleManager
	{
        private static _moduleFactory:Laya.Dictionary=new Laya.Dictionary();
        private static _moduleMap:Array<BaseModule>=new Array<BaseModule>();

        public static init(moduleFactory:IModuleFactory):void
        {
            if(moduleFactory && ModuleManager._moduleFactory.indexOf(moduleFactory.getAppName())<0)
            {
                ModuleManager._moduleFactory.set(moduleFactory.getAppName(),moduleFactory);
            }
        }

        public static clear():void
        {
            ModuleManager._moduleMap.splice(0);
        }

        public static findModule(appname:string,moduleId:number):BaseModule
        {
            let fuimodule:BaseModule=null;
            for (let uimodule of ModuleManager._moduleMap) 
            {
                if(uimodule && uimodule.moduleId==moduleId && uimodule.appName==appname)
                {
                    fuimodule=uimodule;
                }
            }
            return fuimodule;
        }

        public static RegisterModule(appname:string,moduleObj:BaseModule):void
		{
            let gameModule:BaseModule=ModuleManager.findModule(appname,moduleObj.moduleId);
            if(!gameModule)
            {
                let modulefactory:IModuleFactory=ModuleManager._moduleFactory.get(appname);
                if(modulefactory)
                {
                    ModuleManager._moduleMap.push(moduleObj);
                }
            }
		}

        public static getModule(appname:string,moduleId:number):BaseModule
        {
            let gameModule:BaseModule=ModuleManager.findModule(appname,moduleId);
            if(!gameModule)
            {
                let modulefactory:IModuleFactory=ModuleManager._moduleFactory.get(appname);
                if(modulefactory)
                {
                    gameModule = modulefactory.getModule(moduleId);
                    if(gameModule)
                    {
                        ModuleManager._moduleMap.push(gameModule);
                    }
                }
            }

            return gameModule;
        }
    }
}