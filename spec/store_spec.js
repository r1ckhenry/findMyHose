var Store = require('../domain/store.js');
var Address = require('../domain/address.js');
var Location = require('../domain/location.js');

describe('a store', function() {

  beforeEach(function() {
    name = "myName";
    line1 = "line1";
    line2 = "line2";
    line3 = "line3";
    city = "city";
    postcode = "postcode";
    lat = 55.959655;
    lng = -3.2589185;
  });

  it('should have a store name', function() {

    var store = new Store(name);
    expect(store.name).toBe(name);

  });

  it('should have an address', function() {

    var store = new Store(name);
    var line1 = line1;
    var line2 = line2;
    var line3 = line3;
    var city = city;
    var postcode = postcode;
    var address = new Address(line1, line2, line3, city, postcode);
    store.address = address;
    expect(store.address.line1).toBe(line1);
    expect(store.address.line2).toBe(line2);
    expect(store.address.line3).toBe(line3);
    expect(store.address.city).toBe(city);
    expect(store.address.postcode).toBe(postcode);
  });

  it('should have a location', function() {

    var store = new Store(name);
    var location = new Location(lat, lng);
    store.location = location;
    expect(store.location.lat).toBe(lat);
    expect(store.location.lng).toBe(lng);
  });

});