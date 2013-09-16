define(['backbone'], function(Backbone) {
  var CartItem = Backbone.Model.extend({
    idAttribute: "_id",

    urlRoot : '/cart'
  });
  return CartItem;
});