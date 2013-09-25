define(['backbone'], function(Backbone) {
  var CartButtonView = Backbone.View.extend({

    //listen to collection
    initialize: function() {
      this.collection.fetch();
      this.listenTo(this.collection, "add", this.render);
      this.listenTo(this.collection, "change", this.render);
    },

    render: function(model) {
      var qty = 0;
      this.collection.models[0].attributes.items.forEach(function(item){
        qty += item.qty;
      }, this);
      this.$el.html(qty);
      return this;
    }
  });

  return CartButtonView;
});