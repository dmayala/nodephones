define(['backbone', 'models/cartitem'], function(Backbone, CartItem){
  var Cart = Backbone.Collection.extend({
    model: CartItem,

    url: '/cart'
  });

  return Cart;
});