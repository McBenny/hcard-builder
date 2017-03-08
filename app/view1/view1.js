'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.filter('tel', function() {
	return function (input) {
		if (input && input.length > 1) {
			var re1 = /([0-9]{2})/,
				re2 = /([0-9]{2})([0-9]{4})/;
			if (input.length > 2) {
				if (input.length > 6) {
					return input.replace(re2, "$1 $2 ");
				}
				return input.replace(re1, "$1 ");
			}
		}
		return input;
	};
})

.controller('View1Ctrl', ['$scope', 'telFilter', function($scope, telFilter) {
	document.getElementById("upload").onchange = function () {
	    var reader = new FileReader();

	    reader.onload = function (e) {
	        document.getElementById("avatar").src = e.target.result;
	    };

	    // read the image file as a data URL.
	    reader.readAsDataURL(this.files[0]);
	};
}]);


