define(['backbone', 'views/product', 'views/paginated'], function(Backbone, ProductView, PaginatedView) {
  var ProductListView = Backbone.View.extend({
    className: "row",

    initialize: function() {
      this.childViews = [];
    },

    close: function() {
      _.each(this.childViews, function(childView) {
        childView.remove();
      });
      this.childViews.length = 0;
      this.remove();
    },

    addChildView: function(view, options) {
      var child = new view(options);
      this.$el.append(child.render().el);
      this.childViews.push(child);
    },

    render: function() {
      this.collection.each(this.addOne, this);
      this.addChildView(PaginatedView, {collection: this.collection});
      return this;
    },  

    addOne: function(model) {
      this.addChildView(ProductView, {model: model})
    }
  });

  return ProductListView;
});