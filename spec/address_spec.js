var Address = require('../domain/address.js');

describe('an address', function() {

  it('should have a line1', function() {

    var line1 = "line1";
    var line2 = "line2";
    var line3 = "line1";
    var city = "city";
    var postcode = "postcode";
    var address = new Address(line1, line2, line3, city, postcode);
    expect(address.line1).toBe(line1);
    expect(address.line2).toBe(line2);
    expect(address.line3).toBe(line3);
    expect(address.city).toBe(city);
    expect(address.postcode).toBe(postcode);
  });

});