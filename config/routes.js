var orders = require('./../server/controllers/orders.js');
module.exports = function Routes(app) {
	app.get('/', function(req,res) { orders.index(req,res) });
	app.get('/orders', function(req,res) { orders.index(req,res) });
	app.get('/orders/index.json', function(req,res) {orders.index_json(req,res)});
	app.get('/orders/new', function(req,res) {orders.new(req,res) });
	app.post('/orders/create', function(req,res) { orders.create(req,res) });
	app.get('/orders/:id', function(req,res) { orders.show(req,res) });
	app.get('/orders/:id/edit', function(req,res) { orders.edit(req,res) });
	app.post('/orders/newUser_json', function(req,res) {orders.newUser_json(req,res) });
}

var customers = require('./../server/controllers/customers.js');
module.exports = function Routes(app) {
	app.get('/', function(req,res) { customers.index(req,res) });
	app.get('/customers', function(req,res) { customers.index(req,res) });
	app.get('/customers/index.json', function(req,res) {customers.index_json(req,res)});
	app.get('/customers/new', function(req,res) {customers.new(req,res) });
	app.post('/customers/create', function(req,res) { customers.create(req,res) });
	app.get('/customers/:id', function(req,res) { customers.show(req,res) });
	app.get('/customers/:id/edit', function(req,res) { customers.edit(req,res) });
	app.post('/customers/newUser_json', function(req,res) {customers.newUser_json(req,res) });
}

var products = require('./../server/controllers/products.js');
module.exports = function Routes(app) {
	app.get('/', function(req,res) { products.index(req,res) });
	app.get('/products', function(req,res) { products.index(req,res) });
	app.get('/products/index.json', function(req,res) {products.index_json(req,res)});
	app.get('/products/new', function(req,res) {products.new(req,res) });
	app.post('/products/create', function(req,res) { products.create(req,res) });
	app.get('/products/:id', function(req,res) { products.show(req,res) });
	app.get('/products/:id/edit', function(req,res) { products.edit(req,res) });
	app.post('/products/newUser_json', function(req,res) {products.newUser_json(req,res) });
}