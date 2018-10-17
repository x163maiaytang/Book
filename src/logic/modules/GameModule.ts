module logic
{
  

	export class GameModule extends asgard.module.BaseModule
	{
 
        
		constructor()
        {
            super(GameConst.APP_NAME,logic.ModuleType.MODULE_GAME);
        }

	}
}