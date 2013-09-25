function orderDAO(db) {
  //Schemas
  var OrderSchema = new db.Schema({
    "date": { type : Date, default: Date.now },
    "status": {type: String, default: "pending"},
    "items": Array
  });

  //Models 
  var OrderModel = db.model('Order', OrderSchema);

  this.createOrder = function(items, callback) {
    OrderModel.create({items: items}, function(err, cart) {
      callback(err, cart);
    });
  }

  this.updateOrder = function(id, callback) {
    OrderModel.findByIdAndUpdate(id, {status: 'complete'}, callback);
  }

  this.getOrder= function(id, callback) {
    OrderModel.findById(id, callback);
  }
}

module.exports.orderDAO = orderDAO;