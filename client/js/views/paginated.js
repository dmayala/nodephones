define(['backbone', 'hbs!templates/pages'], function(Backbone, PageTpl) {
  var PaginatedView = Backbone.View.extend({

    template: PageTpl,

    initialize: function() {
      this.listenTo(this.collection, "remove", this.remove);
    },

    render: function() {
      this.$el.html(this.template({currentPage: this.collection.currentPage, pageCount: this.collection.totalPages}));
      return this;
    }
    
  });

  return PaginatedView;
});