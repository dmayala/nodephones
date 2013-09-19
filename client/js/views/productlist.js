define(['backbone', 'views/product'], function(Backbone, ProductView) {
  var ProductListView = Backbone.View.extend({

    className: "row",

    render: function() {
      this.collection.each(this.addOne, this);
      return this;
    },   

    addOne: function(model) {
      this.$el.append(new ProductView({model: model}).render().el);
    }
  });

  return ProductListView;
});