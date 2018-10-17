module asgard.module
{
    export interface IModuleFactory
	{
        getAppName():string;
        getModule(moduleid:number):BaseModule;
    }
}