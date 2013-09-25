var OrderDAO = require('../models/order').orderDAO;

function OrderHandler(db) {
  var orders = new OrderDAO(db);

  this.openOrder = function(req, res, next) {
    orders.createOrder(req.session.cartItems, function(err, order) {
      if (err) return next(err);
      req.session.order = order._id;
      next();
    });
  }

  this.findOrder = function(req, res, next) {
    orders.getOrder(req.body.id, function(err, order) {
      if (err) return next(err);
      res.send(order);
    });
  }

  this.updateStatus = function(req, res, next) {
    orders.updateOrder(req.body.order.custom, function(err, order) {
      if (err) return next(err);
      if (!order) return res.send(500);
      res.send(200);
    });
  }
}

module.exports = OrderHandler;