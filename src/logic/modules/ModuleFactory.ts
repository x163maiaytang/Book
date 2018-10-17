module logic
{
    export enum ModuleType{
 
        MODULE_GAME = 0,
 
    }
    // 程序入口
    export class ModuleFactory implements asgard.module.IModuleFactory 
    {
        public getAppName():string
        {
            return logic.GameConst.APP_NAME;
        }
        
        public getModule(moduleid:number):asgard.module.BaseModule
        {
            switch(moduleid)
            {
  
                case logic.ModuleType.MODULE_GAME: return new GameModule();
 
            }
            return null;
        }
    }
}