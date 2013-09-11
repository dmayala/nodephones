require.config({
  paths: {
    hbs: "vendor/handlebars/hbs",
    Handlebars: "vendor/handlebars/Handlebars",
    jquery: 'vendor/jquery/jquery.min',
    bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
    underscore: 'vendor/underscore-amd/underscore-min',
    i18nprecompile: "vendor/handlebars/hbs/i18nprecompile",
    json2: "vendor/handlebars/hbs/json2",
    backbone: 'vendor/backbone-amd/backbone-min'
  },

  shim: {
    bootstrap: ['jquery']
  },

  hbs: {
    disableI18n: true,
    templateExtension: "html"
  }
});

require(['bootstrap', 'backbone', 'routers/appRouter'], function(_bootstrap, Backbone, AppRouter){
  app = new AppRouter();
  Backbone.history.start();
});