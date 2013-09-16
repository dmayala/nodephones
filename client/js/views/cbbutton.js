define(['backbone'], function(Backbone) {
  var CbButtonView = Backbone.View.extend({

    template: _.template('<a class="coinbase-button" data-code="<%= code %>" data-button-style="custom_large" data-button-text="<%= text%>" data-custom="<%= custom %>" href="https://coinbase.com/checkouts/<%= code %>"><%= text %></a><script src="https://coinbase.com/assets/button.js" type="text/javascript"></script>'),

    //listen to models
    initialize: function() {
      this.render();
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.remove);
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });

  return CbButtonView;
});