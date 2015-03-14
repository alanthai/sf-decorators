'use strict';

angular.module('schemaForm').directive('equalTo', [function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			function doCompare() {
				var compare = scope.evalInScope('model.' + attrs.equalTo);
				var value = scope.evalInScope(element.attr('ng-model'));

				if (!compare) return;

				if (value !== compare) {
					scope.ngModel.$setValidity('equal', false);
				} else {
					scope.ngModel.$setValidity('equal', true);
				}
				
			}
			scope.$watch(element.attr('ng-model'), doCompare);
		}
	};
}]);