module asgard.message
{
	export interface IMessageFactory
	{
		getAppName():string;
		getMessage(msgId:number):asgard.utils.SimpleDelegate;
		getHandler(msgId:number):asgard.utils.SimpleDelegate;
		init():void;
	}
}