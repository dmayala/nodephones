define(['backbone', 'hbs!templates/cartTpl', 'models/cbbutton', 'views/cbbutton'], function(Backbone, CartTpl, CbButton, CbButtonView) {
  var CartView = Backbone.View.extend({

    template: CartTpl,

    //listen to models
    initialize: function() {
      this.listenTo(this.model, "change", this.render);
      this.listenTo(this.model, "destroy", this.remove);
    },

    events: {
      "click .remove": "deleteUnit",
      "click .update": "updateUnit"
    },

    deleteUnit: function(e) {
      e.preventDefault();
      var index = $(e.currentTarget).attr("data-index");
      this.model.get('items').splice(index, 1);
      this.model.save();
      this.model.trigger('change');
    },

    updateUnit: function(e) {
      e.preventDefault();
      var index = $(e.currentTarget).attr("data-index");
      this.model.get('items')[index].qty = $(e.currentTarget).closest("tr").find("input").val();
      this.model.save();
    },

    button: function(){
      var button = new CbButton();
      button.fetch({success: function() {
        $('#payup').html(new CbButtonView({model: button}).el);
      }});
    },

    render: function() {
      this.$el.html(this.template(this.model.attributes));
      if(this.model.attributes.items.length) {
        this.button();
      }
      return this;
    }

  });

  return CartView;
});