var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var hbs = require('hbs');
var mongoose = require('mongoose');
var mongoUri = process.env.MONGOHQ_URL;
var MongoStore = require('connect-mongo')(express);

var app = express();

//Use Handlebars template engine
app.engine('html', hbs.__express);


if ('production' == app.get('env')) {
  app.use(express.static(path.join(__dirname, 'client/dist')));
} else {
  app.use(express.static(path.join(__dirname, 'client')));
  mongoUri = 'mongodb://localhost/nodephones-dev';
  app.use(express.errorHandler());
}

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({
    key: process.env.SESSION_KEY,
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({url: mongoUri})
  }));
app.use(express.methodOverride());
app.use(app.router);

// Handle 404
app.use(function(req, res) {
  res.status(404);
  res.render('404', {layout: false});
});

// Handle 500
app.use(function(error, req, res, next) {
  res.status(500);
  res.render('500', {layout: false, error: error});
});

// MongoDB
var db = mongoose.connect(mongoUri);

// Application routes
routes(app, db);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port %d in %s mode", app.get('port'), app.get('env'));
});
