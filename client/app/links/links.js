angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
	$scope.data = {};
	Links.getAll().then(function (link) {
		$scope.data.links = link;
	});
});

