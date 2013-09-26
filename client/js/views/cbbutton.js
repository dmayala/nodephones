define(['backbone', 'hbs!templates/cbButtonTpl'], function(Backbone, CbButtonTpl) {
  var CbButtonView = Backbone.View.extend({

    template: CbButtonTpl,

    //listen to models
    initialize: function() {
      this.render();
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.remove);
    },

    render: function() {
      $("iframe").remove();
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });

  return CbButtonView;
});