define(['backbone', 'hbs!templates/prodDetailsTpl'], function(Backbone, ProdDetailsTpl) {
  var ProductDetailsView = Backbone.View.extend({

    //template
    template: ProdDetailsTpl,

    initialize: function() {
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.remove);
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });

  return ProductDetailsView;
});