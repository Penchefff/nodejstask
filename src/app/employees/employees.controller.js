(function()
{
	'use strict';
	
	angular
		.module		('JavascriptTask')
		.controller	('EmployeesController', EmployeesController)
	;
	
	EmployeesController.$inject = [ '$scope', '$state' ,'$http', 'employee_data'];
	
	function EmployeesController($scope, $state, $http, employee_data)
	{
		var ctrl		= this;
		
		$scope.data = employee_data.data;
		
		$scope.search	= {
			selected: $state.params.search,
		};
		
		ctrl.get_user_data = function(item)
		{
			$scope.selected_person = item;
		};
	}
})();
