var Hose = require('../domain/hose.js');

describe('A Hose', function() {

  it('should have a length', function() {
    var hose = new Hose(10);
    expect(hose.length).toBe(10);

  });

  it('should have colors', function() {
    var hose = new Hose(null, ['Red', 'Green', 'Blue']);
    expect(hose.colors.length).toBe(3);
    expect(hose.colors[0]).toBe('Red');
    expect(hose.colors[1]).toBe('Green');
    expect(hose.colors[2]).toBe('Blue');
  });

  it('should have a description', function() {
    var hose = new Hose(null, null, 'More bang for your buck!');
    expect(hose.description).toBe('More bang for your buck!');

  });

});