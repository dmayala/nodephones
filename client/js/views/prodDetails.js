define(['backbone', 'models/cartitem', 'collections/cart', 'hbs!templates/prodDetailsTpl'], function(Backbone, CartItem, Cart, ProdDetailsTpl) {
  var ProductDetailsView = Backbone.View.extend({

    //template
    template: ProdDetailsTpl,

    initialize: function() {
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.remove);
    },

    events: {
      'click button': 'clicked'
    },

    clicked: function() {
      var modelAtr = this.model.attributes;
      var cartItem = new CartItem({items: [{name: modelAtr.name, qty: $("select").val(), sku: modelAtr._id, price: modelAtr.price}]});
      cartItem.save();
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });

  return ProductDetailsView;
});