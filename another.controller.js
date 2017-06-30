// cree un app angular

myApp.controller('AnotherController', function AnotherController($scope) {
	$scope.Hello = 'Hello!'

	$scope.$on('someEvent', function (event) {
		console.log("coucou");
	})

});