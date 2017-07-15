(function () {
	'use strict';

	angular.module('ShoppingListApp', [])
		.controller('ToBuyController', ToBuyController)
		.controller('AlreadyBoughtController', AlreadyBoughtController)
		.service('ShoppingListService', ShoppingListService);

	ToBuyController.$inject = ['ShoppingListService'];
	function ToBuyController(ShoppingListService) {
		var toBuy = this;

		toBuy.items = ShoppingListService.getToBuyItems();

		toBuy.moveItem = function (itemIndex, itemName, quantity) {
			ShoppingListService.moveItem(itemIndex, itemName, quantity);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListService'];
	function AlreadyBoughtController(ShoppingListService) {
		var alreadyBought = this;
		alreadyBought.items = ShoppingListService.getAlreadyBoughtItems();

	}




	function ShoppingListService() {
		var service = this;

		// List of shopping items
		var alreadyBoughtItems = [];
		var toBuyItems = [{
			name: "pro1",
			quantity: 3
		}, {
			name: "pro2",
			quantity: 4
		}, {
			name: "pro3",
			quantity: 4
		}, {
			name: "pro4",
			quantity: 6
		}, {
			name: "pro5",
			quantity: 2
		}, {
			name: "pro6",
			quantity: 7
		}, {
			name: "pro7",
			quantity: 9
		}
		]

		service.moveItem = function (itemIndex, itemName, quantity) {
			toBuyItems.splice(itemIndex, 1)
			var item = {
				name: itemName,
				quantity: quantity
			};
			console.log("in move", item)
			alreadyBoughtItems.push(item);
			console.log("	alreadyBoughtItems", alreadyBoughtItems)
		}

		service.getAlreadyBoughtItems = function () {
			console.log("en get", alreadyBoughtItems)
			return alreadyBoughtItems;
		};
		service.getToBuyItems = function () {
			return toBuyItems;
		};
	}

})();
