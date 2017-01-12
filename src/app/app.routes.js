(function()
{
	'use strict';
	
	angular.module('JavascriptTask').config(config);
	
	config.$inject = [ '$interpolateProvider', '$locationProvider', '$urlMatcherFactoryProvider', '$stateProvider', 'uiSelectConfig' ];
	
	function config($interpolateProvider, $locationProvider, $urlMatcherFactoryProvider, $stateProvider, uiSelectConfig)
	{
		$urlMatcherFactoryProvider.strictMode(false);
		
		uiSelectConfig.theme = 'select2';
	}
})();