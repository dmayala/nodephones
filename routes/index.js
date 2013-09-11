var ProductHandler = require('./product');

module.exports = exports = function(app, db){
  var productHandler = new ProductHandler(db);

  app.get('/products', productHandler.findAll);
  app.get('/products/:id', productHandler.findById);
}