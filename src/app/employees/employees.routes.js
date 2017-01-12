(function()
{
	'use strict';
	
	angular.module('JavascriptTask').config(config);
	
	config.$inject = [ '$stateProvider' ];
	
	// /* @ngInject */
	function config($stateProvider)
	{
		$stateProvider
			.state('employees',
			{
				controller	: 'EmployeesController as ctrl',
				url: '', templateUrl: '/tpl/employees/employees.view.html',
				resolve		: {
					employee_data: [ '$http', function($http)
					{
							return $http.get('/api/employees/all');
					}]
				},
			})
		;
	}
})();