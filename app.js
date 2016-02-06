var express = require('express');
var app = express();
var unique = require('uniq');

var expressLayouts = require('express-ejs-layouts');

var Converter = require("csvtojson").Converter;
var converter = new Converter({});

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(express.static('public'));

app.get('/', function(req, res) {

  converter.on("end_parsed", function (jsonArray) {
    res.json(jsonArray);
  });

  require("fs").createReadStream('./data/findmyhose.csv').pipe(converter);

});

app.listen('3000', function() {
  console.log('Running on port 3000');
});