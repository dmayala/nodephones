define(['backbone', 'views/cart'], function(Backbone, CartView) {
  var CartListView = Backbone.View.extend({

    className: "row",

    //listen to models
    initialize: function() {
      this.childViews = [];
      this.collection.each(this.addOne, this);
      this.listenTo(this.collection, "add", this.addOne);
    },

    close: function() {
      _.each(this.childViews, function(childView) {
        childView.remove();
      });
      this.childViews.length = 0;
      this.remove();
    },

    addOne: function(model) {
      var child = new CartView({model: model});
      this.$el.append(child.render().el);
      this.childViews.push(child);
    }
  });

  return CartListView;
});