miniStore.factory('OrderFactory', function() {
	var factory = {};
	var orders = [
		{ customer_name: 'Michael Choi', product: 'Nike Shoes', quantity: 2, order_date: 'April 3rd 2014' },
		{ customer_name: 'John Supsupin', product: 'Black Belts', quantity: 3, order_date: 'April 3rd 2014' },
		{ customer_name: 'Trey Villafane', product: 'Ice Creams', quantity: 5, order_date: 'April 1st 2014' },
		{ customer_name: 'India Meisner', product: 'Candles', quantity: 15, order_date: 'March 15th 2014' },
		{ customer_name: 'Lisa Ha', product: 'Ice Creams', quantity: 2, order_date: 'July 2nd, 2014' }
	];
	factory.getOrders = function() {
		return orders;
	}
	factory.createOrder = function(order) {
		if(order == undefined) {
			return "All fields required to place an order!";
		} else {
			if((order.customer_name == null) || (order.quantity == null) || (order.product == null)) {
				return "All fields required to place an order!";
			} else {
				orders.push({
					customer_name: order.customer_name,
					product: order.product,
					quantity: order.quantity,
					order_date: new Date().getTime()
				})
			}
		}
	}
	return factory;
})

miniStore.factory('CustomerFactory', function() {
	var factory = {};
	var customers = [
						'Michael Choi',
						'John Supsupin',
						'Trey Villafane',
						'India Meisner',
						'Lisa Ha'
					];
	factory.getCustomers = function() {
		return customers;
	}
	factory.createCustomer = function(name) {
		if(name == undefined) {
			return "Customer name requried to add a new customer.";
		} else {
			var flag = false;
			for (var i = 0; i < customers.length; i++) {
				if(customers[i] == name) {
					flag = true;
					return "A customer by that name already exists.";
				}
			}
			if(!flag) {
				customers.push(name)
			}
		}

	}
	return factory;
})

miniStore.factory('ProductFactory', function() {
	var factory = {};
	var products = [
					'Oranges',
					'Bananas',
					'Watermelon',
					'Cherries',
					'Kiwis',
					'Plums',
					'Apples',
					'Grapes'
					];
	factory.getProducts = function() {
		return products;
	}
	factory.createProduct = function(name) {
		if(name == undefined) {
			return "Product name requried to add a new product.";
		} else {
			var flag = false;
			for (var i = 0; i < products.length; i++) {
				if(products[i] == name) {
					flag = true;
					return "A product by that name already exists.";
				}
			}
			if(!flag) {
				products.push(name)
			}
		}
	}
	return factory;
})