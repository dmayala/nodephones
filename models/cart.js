function cartDAO(db) {
  //Schemas
  var ItemSchema = new db.Schema({
    "sku": db.Schema.ObjectId,
    "name": String,
    "qty": Number,
    "price": Number
  });

  var CartSchema = new db.Schema({
    "items": [ItemSchema]
  });

  //Models 
  var CartModel = db.model('Cart', CartSchema);

  this.createCart = function(callback) {
    CartModel.create({}, function(err, cart) {
      callback(err, cart);
    });
  }

  this.setItem = function(id, sku, name, qty, price, callback){
    CartModel.find({_id: id, "items" : {  $elemMatch : {"sku": db.Types.ObjectId.fromString(sku)}}}, function(err, cart) {
      if (cart.length) {
        CartModel.update({ "_id": id, "items" : {  $elemMatch : {"sku": db.Types.ObjectId.fromString(sku)}}},{ $inc : {"items.$.qty": qty}}, 
          callback);
      } else {
        CartModel.findByIdAndUpdate(id, {$push: {items: {sku: sku, name: name, qty: qty, price: price}}}, callback);
      }
    });
  }

  this.getItems = function(id, callback) {
    CartModel.findById(id, callback);
  }

  this.updateItems = function(id, items, callback){
    CartModel.findByIdAndUpdate(id, {items: items}, callback);
  }
}

module.exports.cartDAO = cartDAO;