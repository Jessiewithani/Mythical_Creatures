var assert = require('chai').assert;
var Vampire = require('../exercises/vampire');

describe('Vampire', function() {

  it('should be a function', function() {
    assert.isFunction(Vampire);
    //is Vampire a function?
  });

  it('should instantiate our good friend, Vampire', function() {
    var vampire = new Vampire();
    assert.isObject(vampire);
  });

  it('should have a name', function() {
    var vampire = new Vampire('Jhun');
    assert.equal(vampire.name, 'Jhun');
    //create a key of name
    //we have one argument
    //we need one parameter to match
  });

  it('should have a pet bat as a default', function() {
    var vampire = new Vampire('Brittany');
    assert.equal(vampire.name, 'Brittany');
    assert.equal(vampire.pet, 'bat');
    //create a key of pet
    //has an argument
    //needs parametr to match
  });

  it('should take an argument for pet', function() {
    var vampire = new Vampire('Jeff', 'fox');
    assert.equal(vampire.pet, 'fox');
  });

  it('should have vampire return true if thirsty', function() {
    var vampire = new Vampire('Andy');
    assert.equal(vampire.thirsty, true);
    //create a new key of thirsty
    //assign to true
  });

  it('should refute thirsty if vampire has drank', function() {
    var vampire = new Vampire('Meeka');
    vampire.drink();
    assert.equal(vampire.thirsty, false);
    //calling for a drink() method
  });
});
