var express = require('express');
var app = express();
var unique = require('uniq');
var transformer = require('./services/csvtojson.js');
var expressLayouts = require('express-ejs-layouts');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', function(req, res) {
  
  transformer.convert(function(json){
    res.json(json);
  });

});

app.listen('3000', function() {
  console.log('Running on port 3000');
});