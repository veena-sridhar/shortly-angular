angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  $scope.link = {};
  $scope.addLink = function () {
  	return $http({
  		method: 'POST',
  		url: '/api/links'
  	});
  }
});
