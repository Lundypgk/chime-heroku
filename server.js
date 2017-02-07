/**
 * Module dependencies.
 */

var express = require('express'),
  //routes = require('./routes'),
  http = require('http'),
  path = require('path'),
  bodyParser = require('body-parser');

var viewDirectory = path.join(__dirname, 'views');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(viewDirectory,{index:false,extensions:['html']}));


if (app.get('env') == 'development') {
  app.locals.pretty = true;
}

app.get('/', function(req, res) {
 res.redirect('home.html');
});

app.get('/login', function(req, res) {
  res.redirect('login.html')
});


//Catch all other routes
app.get('/*', function(req, res) {
 res.redirect('home.html');
});



http.createServer(app).listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
