require.config({
  paths: {
    hbs: 'vendor/require-handlebars-plugin/hbs',
    jquery: 'vendor/jquery/jquery.min',
    bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
    underscore: 'vendor/underscore-amd/underscore',
    i18nprecompile: 'vendor/require-handlebars-plugin/hbs/i18nprecompile',
    json2: 'vendor/require-handlebars-plugin/hbs/json2',
    backbone: 'vendor/backbone/backbone',
    paginator: 'vendor/backbone.paginator/dist/backbone.paginator'
  },

  shim: {
    backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
    },
    bootstrap: ['jquery'],
    paginator: {
        deps: [
        'backbone',
        'underscore',
        'jquery'
        ],
        exports: 'Backbone.Paginator'
    },
    hbs : {
      disableI18n: true,
      helperPathCallback: function (name) {
        return 'templates/helpers/' + name;
      }
    }
  }
});

require(['bootstrap', 'backbone', 'routers/appRouter', 'mediator/controller'], function(_bootstrap, Backbone, AppRouter, Controller){
  Backbone.View.prototype.close = function(){
    this.remove();
    this.unbind();
  }
  var controller = new Controller();
  var app = new AppRouter();
  app.controller = controller;
  controller.start();
  Backbone.history.start();
});