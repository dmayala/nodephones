define(['backbone'], function(Backbone) {
  var Product = Backbone.Model.extend({
    idAttribute: "_id",

    urlRoot : '/products',

    defaults: {
      name: "",
      specification: "",
      photoName: "",
      price: 0
    }
  });
  return Product;
});