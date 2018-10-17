module asgard.stage
{
	export interface IStageFactory
	{
		getAppName():string;
		getStage(spriteType:number):BaseStage;
	}
}