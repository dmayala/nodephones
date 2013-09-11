function productDAO(db) {
  //Schemas
  var ProductSchema = new db.Schema({
    name: String,
    description: String,
    specification: String,
    photoName: String,
    price: Number
  });

  //Models 
  var ProductModel = db.model('Product', ProductSchema);

  this.getProducts = function(callback){
    ProductModel.find(function(err, products) {
      callback(err, products);
    });
  },

  this.getProduct = function(id, callback) {
    ProductModel.findById(id, function (err, product) {
      callback(err, product);
    });
  }
}

module.exports.productDAO = productDAO;