/*A Backbone Paginated Collection
https://github.com/backbone-paginator/backbone.paginator*/

define(['backbone', 'paginator', 'models/product'], function(Backbone, BackbonePaginator, Product){
  var Products = Backbone.Paginator.requestPager.extend({
    model: Product,

    paginator_core: {
      type: 'GET',
      dataType: 'json',
      url: '/products'
    },

    paginator_ui: {
      firstPage: 1,

      currentPage: 1,

      perPage: 8,

      totalPages: 3
    },

    server_api: {
      'skip': function() { return (this.currentPage - 1) * this.perPage },
      'limit': function() { return this.perPage }
    }

  });

  return Products;
});