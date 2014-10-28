var CartDAO = require('../models/cart').cartDAO;
var coinbase = require('coinbase-auth');
coinbase.key(process.env.COINBASE_API_KEY);
coinbase.secret(process.env.COINBASE_API_SECRET);

function CartHandler(db) {
  var cart = new CartDAO(db);

  this.loadCart = function(req, res, next) {
    if(!req.session.cart) {
      cart.createCart(function (err, cart) {
        req.session.cart = cart._id;
        next();
      });
    } else {
      next();
    }
  },

  this.findCartItems = function(req, res, next) {
    var id = req.session.cart;

    cart.getItems(id, function(err, cart) {
      if (err) return next(err);
      req.session.cartItems = cart.items;
      next();
    });
  },

  this.coins = function(req, res, next) {
    var id = req.session.cart;
    var orderNo = req.session.order;

    cart.getItems(id, function(err, cart) {
      var total = 0;
      
      cart.items.forEach(function(item) {
        total += ((item.price * item.qty)/100);
      });

      var options = {
        "url": "https://api.coinbase.com/v1/buttons",
        "json": {
          "button": {
            "name": 'Order ' + orderNo,
            "price_string": "$" + total.toString(),
            "price_currency_iso": 'USD',
            "custom": orderNo,
            "description": 'Your Nodephones Order',
            "type": 'buy_now',
            "style": 'custom_large'
          }
        }
      };

      coinbase.post(options, function (err, data) {
        if (err) {
          next(err);
        } else {
          res.send(data.button);
        }
      });
    });
  },

  this.addItemtoCart = function(req, res, next) {
    var id = req.session.cart;
    var sku = req.body.items[0].sku;
    var name = req.body.items[0].name;
    var qty = req.body.items[0].qty || 1;
    var price = req.body.items[0].price;
    
    cart.setItem(id, sku, name, qty, price, function (err, cart) {
      if (err) return next(err);
      res.send(cart);
    });
  },

  this.findAll = function(req, res, next) {
    var id = req.session.cart;

    cart.getItems(id, function(err, cart) {
      if (err) return next(err);
      res.send(cart);
    });
  },

  this.findPrices = function(id, callback) {
    cart.getItems(id, function(err, cart) {
      return callback(cart);
    });
  },

  this.updateCart = function(req, res, next) {
    var id = req.params.id;
    var items = req.body.items;
    cart.updateItems(id, items, function (err, cart) {
      if (err) return next(err);
      res.send(cart);
    });
  }
}

module.exports = CartHandler;