define(['backbone', 'views/cart'], function(Backbone, CartView) {
  var CartListView = Backbone.View.extend({

    className: "row",

    //listen to models
    initialize: function() {
      this.collection.each(this.addOne, this);
      this.listenTo(this.collection, "add", this.addOne);
    },    

    addOne: function(model) {
      this.$el.append(new CartView({model: model}).render().el);
    }
  });

  return CartListView;
});