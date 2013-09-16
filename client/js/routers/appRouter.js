define([
  'backbone', 'models/product', 'collections/products','views/productlist',
  'views/prodDetails','collections/cart', 'views/cartlist'], 
  function(Backbone, Product, Products, ProductListView, ProductDetailsView, 
          Cart, CartListView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
        ""                  : "list",
        "products/:id"      : "prodDetails",
        "cart/"              : "showCart"
    },

    list: function() {
      var collection = new Products();
      collection.fetch({success: function() {
        $('#content').html(new ProductListView({collection: collection}).el);
      }});
    },

    prodDetails: function(id) {
      var product = new Product({_id: id});
      product.fetch({success: function() {
        $('#content').html(new ProductDetailsView({model: product}).render().el);
      }});
    },

    showCart: function() {
      var collection = new Cart();
      collection.fetch({success: function() {
        $('#content').html(new CartListView({collection: collection}).el);
      }});
    }
  });

  return AppRouter;
});