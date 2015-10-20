var ePsyFront = angular.module('ePsyFront', [
	'ngRoute',
    'lbServices'
]);

env(ePsyFront);


ePsyFront.directive('emailLink', [function() {
	return {
		restrict: 'A',
		link: function($scope, $element, $attr){
			$element.bind('click', function(event){
				ga('send', 'event', 'link', 'click', 'email');
			});
		}
	};
}])


.directive('formLink', [function() {
	return {
		restrict: 'A',
		link: function($scope, $element, $attr){
			$element.bind('click', function(event){
				ga('send', 'event', 'link', 'click', 'google-form');
			});
		}
	};
}])

.directive('newsletter', [function() {
	return {
		restrict: 'A',
		templateUrl: 'partials/newsletter.html',
		link: function($scope, $element, $attr){
			$scope.signup = function(){

			};
		}
	};
}]);
