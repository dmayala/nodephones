define(['backbone', 'hbs!templates/pages'], function(Backbone, PageTpl) {
  var PaginatedView = Backbone.View.extend({

    template: PageTpl,

    render: function() {
      this.$el.html(this.template({currentPage: this.collection.currentPage, pageCount: this.collection.totalPages}));
      return this;
    }
    
  });

  return PaginatedView;
});