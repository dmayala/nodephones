define([
  'backbone', 'models/product', 'collections/products','views/productlist',
  'views/prodDetails','collections/cart', 'views/cartlist', 'views/paginated'], 
  function(Backbone, Product, Products, ProductListView, ProductDetailsView, 
          Cart, CartListView, PaginatedView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
        ""                  : "list",
        "page/:page"        : "list",
        "products/:id"      : "prodDetails",
        "cart/"             : "showCart",
    },

    list: function(page) {
      collection = new Products();

      var page = page || 1;
      
      collection.goTo(page, {success: function() {
        $('#content').html(new ProductListView({collection: collection}).render().el);
        $('#content').append(new PaginatedView({collection: collection}).render().el);
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