var miniStore = angular.module('miniStore', ['ngRoute']);

miniStore.config(function($routeProvider) {
	$routeProvider
	.when('/',
	{
		templateUrl: 'partials/orders.html'
	})
	.when('/customers',
	{
		templateUrl: 'partials/customers.html'
	})
	.when('/products',
	{
		templateUrl: 'partials/products.html'
	})
})