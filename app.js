var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Bye World');
});

app.listen('3000', function() {
  console.log('Running on port 3000');
});