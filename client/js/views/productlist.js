define(['backbone', 'views/product'], function(Backbone, ProductView) {
  var ProductListView = Backbone.View.extend({

    className: "row",

    //listen to models
    initialize: function() {
      this.collection.each(this.addOne, this);
      this.listenTo(this.collection, "add", this.addOne);
    },    

    addOne: function(model) {
      this.$el.append(new ProductView({model: model}).render().el);
    }
  });

  return ProductListView;
});