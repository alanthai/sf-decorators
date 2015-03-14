'use strict';

angular.module('schemaForm').directive('convertSelect', function() {
	return {
		restrict: 'A',
		controller: function($scope, $element, $attrs) {
			var scope = $element.scope();

			scope.change = function(value, unit) {
				scope.$eval($attrs.ngModel + '=' + value * unit);
			};
			
			scope.options = [
				{name: 'bbl', value: 42},
				{name: 'gal', value: 1}
			];
			scope.selectedOption = scope.options[0];

			scope.proxyModel = scope.$eval($attrs.ngModel);
			if (scope.proxyModel) {
				scope.selectedOption = scope.options[1];
			}
		}
	};
});