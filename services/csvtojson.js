var Converter = require("csvtojson").Converter;
var converter = new Converter({});

var transformer = {
  convert: function(callback){

  converter.on("end_parsed", function (json) {
    callback(json);
  });

  require("fs").createReadStream('./data/findmyhose.csv').pipe(converter);

  }
}

module.exports = transformer;