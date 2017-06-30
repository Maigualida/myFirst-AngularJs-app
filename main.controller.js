// cree un app angular
var myApp = angular.module('myApp', []);

myApp.controller('PhoneListController', function PhoneListController($scope, $rootScope, $http) {
	$scope.name = 'Mai'
	$scope.newName = ''
	$scope.names = ['Mai', 'Anable', 'Renaud', 'Julian', 'alguien']

	$scope.users = [];

	$http.get("https://randomuser.me/api/?results=10").then(function (reponse) {
		console.log(reponse)
		$scope.users = reponse.data.results;
	})

	$scope.supprimer = function (item) {
		let position = $scope.names.indexOf(item);
		$scope.names.splice(position, 1);
		$rootScope.$broadcast('someEvent'); // se utiliza rootScoope para ir al padre y escuchar de todos lados
	}

	$scope.add = function () {
		$scope.names.push($scope.newName)
		$scope.newName = ''
	}

	$scope.verify = function () {
		if ($scope.newName.length < 3) {
			alert("Veullez mettre un prenom plus complet")
		}
	}
});