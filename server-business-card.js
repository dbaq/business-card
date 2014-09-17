// set up ========================
var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');


// configuration ================= 
app.use(serveStatic(__dirname + '/public'));
app.use(methodOverride());
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser());

// routes ================= 
app.get('/', function(req, res) {
	res.sendfile('./public/html/index.html');
});

app.get('*', function(req, res) {
	res.sendfile('./public/html/404.html');
});

// start ================= 
app.listen(9002);
console.log("App listening on port 9002");