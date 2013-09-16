var ProductHandler = require('./product');
var CartHandler = require('./cart');

module.exports = exports = function(app, db){
  var productHandler = new ProductHandler(db);
  var cartHandler = new CartHandler(db);

  app.get('/products', productHandler.findAll);
  app.get('/products/:id', productHandler.findById);
  app.get('/cart', cartHandler.loadCart, cartHandler.findAll);
  app.post('/cart', cartHandler.loadCart, cartHandler.addItemtoCart);
  app.put('/cart/:id', cartHandler.loadCart, cartHandler.updateCart);
  app.get('/coins', cartHandler.loadCart, cartHandler.coins);
}