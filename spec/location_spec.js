var Location = require('../domain/location.js');

describe('a location', function() {

    beforeEach(function() {
        lat = 1.4565;
        lng = -3.5567;
    });

  it('should have a lat', function() {

    var location = new Location(lat, lng);
    expect(location.lat).toBe(lat);
  });

  it('should have a lng', function() {

    var location = new Location(lat, lng);
    expect(location.lng).toBe(lng);
  });

});