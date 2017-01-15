'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../index.html'));
});

var port = process.env.PORT || 1337;
app.listen(port, function () {
	console.log("Please come find me at port " + port + "!");
});