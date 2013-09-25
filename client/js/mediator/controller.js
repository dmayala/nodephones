define([
  'backbone', 'models/product', 'collections/products','views/productlist',
  'views/prodDetails','collections/cart', 'views/cartlist', 'views/paginated', 'views/cartmenu'], 
  function(Backbone, Product, Products, ProductListView, ProductDetailsView, 
          Cart, CartListView, PaginatedView, CartMenu) {

  var Controller = function() {
    this.collection = new Products();
    this.cart = new Cart();
  };

  _.extend(Controller.prototype, {
    start: function() {
      this.showCartHeader(this.cart);
    },

    showView: function(view) {
      if (this.currentView){
        this.currentView.close();
      }

      this.currentView = view;
      this.currentView.render();

      $("#content").html(this.currentView.el);
    },

    showCartHeader: function (cart) {
      new CartMenu({el: $('#cart'), collection: cart});
    },

    showList: function (page) {
      var self = this;

      var page = page || 1;

      this.collection.goTo(page, {success: function() {
        var listView = new ProductListView({collection: self.collection});
        self.showView(listView);
      }});
    },

    showProdDetails: function (id) {
      var product = new Product({_id: id});
      var self = this;
      product.fetch({success: function() {
        var prodView = new ProductDetailsView({model: product});
        self.showView(prodView);
      }});
    },

    showCart: function () {
      var cart = this.cart;
      var self = this;
      cart.fetch({success: function() {
        var cartView = new CartListView({collection: cart});
        self.showView(cartView);
      }});
    }
  });

  return Controller;
});