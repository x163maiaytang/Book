module asgard.ui
{
	export interface IUIFactory
	{
		getAppName():string;

		getUI(viewname:string):BaseUIPanel;
	}
}