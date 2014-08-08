miniStore.controller('orders', function($scope, OrderFactory, CustomerFactory, ProductFactory) {
	$scope.orders = OrderFactory.getOrders();
	$scope.customers = CustomerFactory.getCustomers();
	$scope.products = ProductFactory.getProducts();
	$scope.newOrder = function() {
		$scope.error = OrderFactory.createOrder($scope.new_order);
	}
})

miniStore.controller('customers', function($scope, CustomerFactory) {
	$scope.customers = CustomerFactory.getCustomers();
	$scope.newCustomer = function() {
		$scope.error = CustomerFactory.createCustomer($scope.new_customer);
	}
})

miniStore.controller('products', function($scope, ProductFactory) {
	$scope.products = ProductFactory.getProducts();
	$scope.newProduct = function() {
		$scope.error = ProductFactory.createProduct($scope.new_product);
	}
})