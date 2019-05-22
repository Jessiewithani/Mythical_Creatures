var assert = require('chai').assert;
var Dragon = require('../exercises/dragon');

describe('Dragon', function() {

  it('should be a function', function() {
    assert.isFunction(Dragon);
    //is Dragon a function?
  });

  it('should instantiate our good friend, Dragon', function() {
    var dragon = new Dragon();
    assert.isObject(dragon);
    //new dragon is instantiating
  });

  it('should have name', function() {
    var dragon1 = new Dragon('Jeff');
    assert.equal(dragon1.name, 'Jeff');
    var dragon2 = new Dragon('Louisa');
    assert.equal(dragon2.name, 'Louisa');
    //create a key of name
    //has an argument
    //needs a parameter to match
  });

  it('should have a rider', function() {
    var dragon = new Dragon('Saphira', 'Eragon');
    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
    //instantiated a new class of Dragon
    //create a key of rider
    //has two arguments
    //need same amount of parameters
  });

  it('should have a color', function() {
    var dragon = new Dragon('Saphira', 'Eragon', 'blue');
    assert.equal(dragon.color, 'blue');
    //new instantiation is passing through a color
    //create a key of color, and parameter to match
  });

  it('should start off being hungry', function() {
    var dragon = new Dragon('Josh');
    assert.equal(dragon.hungry, true);
    //create a new key of hungry
    //assign to true
  });

  it('should be full after eating 3 times', function() {
    var dragon = new Dragon('Lady Vox');
    //create a counter

    assert.equal(dragon.hungry, true);
    dragon.eat();
    assert.equal(dragon.hungry, true);
    dragon.eat();
    assert.equal(dragon.hungry, true);

    dragon.eat();
    assert.equal(dragon.hungry, false);
  });
});
