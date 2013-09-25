define(['backbone'], function(Backbone) {
  var CbButtonView = Backbone.View.extend({

    template: _.template('<a class="coinbase-button" data-code="<%= code %>" data-button-style="custom_large"></a><script type="text/javascript">$(document).ready(function() {$(".my-custom-link").hide(); $.getScript("https://coinbase.com/assets/button.js", function() { $("iframe").load(function() { $(".my-custom-link").show(); $(".my-custom-link").click(function(){$(document).trigger("coinbase_show_modal", "<%= code %>");return false;});$(document).on("coinbase_payment_complete", function(event, code){console.log("Payment completed for button "+code);window.location = "/confirmation.html";});}); });});</script>'),

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