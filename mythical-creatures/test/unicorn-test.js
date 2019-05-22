var assert = require('chai').assert;
var Unicorn = require('../exercises/unicorn');

describe('Unicorn', function() {

  it('should be a function', function() {
    assert.isFunction(Unicorn);
    //is Unicorn a function?
  });

  it('should instantiate our good friend, Unicorn', function() {
    var unicorn = new Unicorn();
    assert.isObject(unicorn);
    //creating a new instance of the class Unicorn
  });

  it('should have a name', function() {
    var unicorn = new Unicorn('Bree');
    assert.equal(unicorn.name, 'Bree');
    //create a new key of name
    //has one argument of 'Bree'
    //need to have one parameter
  });

  it('should be able to have a different name', function() {
    var unicorn = new Unicorn('Pam');
    assert.equal(unicorn.name, 'Pam');
    //should pass because we made it dynamic
    //by putting the name in the parameter
  });

  it('should have a color', function() {
    var unicorn = new Unicorn('TayTay', 'blue');
    assert.equal(unicorn.color, 'blue');
    //since this has 2 arguments
    //our object needs to parameters to match
  });

  it('should be white as default', function() {
    var unicorn = new Unicorn('Louisa');
    assert.equal(unicorn.color, 'white');
    //only has one argument
    // so the value is undefined
  });

  it('should refute isWhite', function() {
    var unicorn = new Unicorn('Steve', 'red');
    assert.equal(unicorn.isWhite(), false);
    //calling the method isWhite()

  });

  it('should say sparklying stuff', function() {
    var unicorn = new Unicorn('Brenna');
    assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
    assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
    //use interpolation to pass the value through the parameter
  });
});
