var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var index = require('./routes/index.js')
var Assignment = require('../models/assignment');

var app = express();

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[MONGO]]]]]]]]]]]]]]]]]]]]]]]]]]]]

var mongoURI = 'mongodb://localhost:27017/assignments';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
	console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
	console.log('mongodb connection open!');
});

// [[[[[[[[[[[[[[[[[[[[[[[[[[GLOBAL CONF]]]]]]]]]]]]]]]]]]]]]]]]]]

app.use(bodyParser.json());
app.use(express.static('server/public'));

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[ROUTERS]]]]]]]]]]]]]]]]]]]]]]]]]]]]

app.use('/', index);

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[SERVER]]]]]]]]]]]]]]]]]]]]]]]]]]]]

var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Listening on port', port + '.');
});
