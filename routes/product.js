var ProductDAO = require('../models/product').productDAO;

function ProductHandler(db) {
  var products = new ProductDAO(db);

  this.findAll = function(req, res, next){
    var skip = req.query.skip || 0;
    var limit = req.query.limit || 0;
    products.getProducts(skip, limit, function (err, productslist) {
      if (err) return next(err);
      res.send(productslist);
    });
  },

  this.findById = function(req, res, next) {
    var id = req.params.id;
    products.getProduct(id, function (err, product) {
      if (err) return next(err);
      res.send(product);
    });
  }
}

module.exports = ProductHandler;