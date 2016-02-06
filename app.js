var express = require('express');
var app = express();
var unique = require('uniq');

app.get('/', function(req, res) {
  res.send('Bye World');
});

app.listen('3000', function() {
  console.log('Running on port 3000');
});