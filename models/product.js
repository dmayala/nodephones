function productDAO(db) {
  //Schemas
  var CartedSchema = new db.Schema({
    "cart_id": db.Schema.ObjectId,
    "qty": Number
  });

  var ProductSchema = new db.Schema({
    "name": String,
    "description": String,
    "specification": String,
    "photoName": String,
    "price": Number,
    "qty": Number,
    "carted": [CartedSchema]
  });

  //Models 
  var ProductModel = db.model('Product', ProductSchema);

  this.getProducts = function(callback){
    ProductModel.find(callback);
  },

  this.getProduct = function(id, callback) {
    ProductModel.findById(id, callback);
  }
}

module.exports.productDAO = productDAO;