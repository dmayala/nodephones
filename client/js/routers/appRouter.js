define(['backbone', 'models/product', 'collections/products','views/productlist','views/prodDetails'], function(Backbone, Product, Products, ProductListView, ProductDetailsView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
        ""                  : "list",
        "products/:id"      : "prodDetails"
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
    }
  });

  return AppRouter;
});