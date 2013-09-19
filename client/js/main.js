require.config({
  paths: {
    hbs: "vendor/require-handlebars-plugin/hbs",
    Handlebars: "vendor/require-handlebars-plugin/Handlebars",
    jquery: 'vendor/jquery/jquery.min',
    bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
    underscore: 'vendor/underscore-amd/underscore',
    i18nprecompile: "vendor/require-handlebars-plugin/hbs/i18nprecompile",
    json2: "vendor/require-handlebars-plugin/hbs/json2",
    backbone: 'vendor/backbone/backbone',
    paginator: 'vendor/backbone.paginator/dist/backbone.paginator'
  },

  shim: {
    backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
    },
    bootstrap: ['jquery'],
    paginator: {
        deps: [
        'backbone',
        'underscore',
        'jquery'
        ],
        exports: 'Backbone.Paginator'
    }
  },

  hbs: {
    disableI18n: true,
    templateExtension: "html",
    helperDirectory: "templates/helpers/"
  }
});

require(['bootstrap', 'backbone', 'routers/appRouter'], function(_bootstrap, Backbone, AppRouter){
  var app = new AppRouter();
  Backbone.history.start();
});