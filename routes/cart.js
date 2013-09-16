var CartDAO = require('../models/cart').cartDAO;
var Coinbase = require('coinbase');
var coinbase = new Coinbase({
  APIKey: process.env.COINBASE_APIKEY
});

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

  this.coins = function(req, res, next) {
    var id = req.session.cart;

    cart.getItems(id, function(err, cart) {
      var total = 0;
      
      cart.items.forEach(function(item) {
        total += ((item.price * item.qty)/100);
      });

      var param = {
            "button": {
              "name": 'Order #123',
              "price_string": "$" + total.toString(),
              "price_currency_iso": 'USD',
              "custom": 'Order123',
              "description": 'Test',
              "type": 'buy_now',
              "style": 'custom_large'
            }
          };

      coinbase.buttons.create(param, function (err, data) {
        if (err) {
          res.send(500);
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