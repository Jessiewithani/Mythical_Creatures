var assert = require('chai').assert;
var Pirate = require('../exercises/pirate');

describe('Pirate', function() {

  it('should be a function', function() {
    assert.isFunction(Pirate);
    //is Pirate a function?
  });

  it('should instantiate our good friend, Pirate', function() {
    var pirate = new Pirate();
    assert.isObject(pirate);
  });

  it('should have a name', function() {
    var pirate = new Pirate('Blackbeard');
    assert.equal(pirate.name, 'Blackbeard');
    //create a key of name
    //has one argument
    //need parameter to match
  });

  it('should be a scallywag by default', function() {
    var pirate = new Pirate('JeffBeard');
    assert.equal(pirate.name, 'JeffBeard');
    assert.equal(pirate.job, 'Scallywag');
    //create a key of job
  });

  it('should be a cook if passed into argument', function() {
    var pirate = new Pirate('HoraceBeard', 'cook');
    assert.equal(pirate.job, 'cook');
    //include parameter for the argument
    //make it dynamic because different job
  });

  it('should not be cursed by default', function() {
    var pirate = new Pirate('SteveBeard', 'cook');
    assert.equal(pirate.cursed, false);
    //create a key of cursed
    //assigned to false
  });

  it('should become cursed after 3 heinous acts', function() {
    var pirate = new Pirate('JoshBeard', 'cook');
    //create a "counter"

    assert.equal(pirate.cursed, false);
    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, false);
    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, false);

    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, true);
  });

  it('should be able to rob ships', function() {
    var pirate = new Pirate('JeffBeard');
    assert.equal(pirate.robShip(), 'YAARRR!');
    //calling for a method robShip()
    //needs to return YAARRR
  });

  it('should start with a booty of 0', function() {
    var pirate = new Pirate('JeffBeard');
    assert.equal(pirate.booty, 0);
    //create a key of booty
    //assign it to zero
  });

  it('should have a booty of 100 after robShip()', function() {
    var pirate = new Pirate('JeffBeard');
    assert.equal(pirate.booty, 0);
    //after robShip() is done, raise up the prize money
    pirate.robShip();
    assert.equal(pirate.booty, 100);
  });
});
