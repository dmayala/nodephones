define(['backbone', 'hbs!templates/prodTpl'], function(Backbone, ProdTpl) {
  var ProductView = Backbone.View.extend({

    className: "thumbnails col-sm-6 col-md-3",

    template: ProdTpl,

    //listen to models
    initialize: function() {
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.remove);
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });

  return ProductView;
});