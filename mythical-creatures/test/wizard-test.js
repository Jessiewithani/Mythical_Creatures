var assert = require('chai').assert;
var Wizard = require('../exercises/wizard');

describe('Wizard', function() {

  it('should be a function', function() {
    assert.isFunction(Wizard);
    //is Wizard a function?
  });

  it('should have a name', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.name, 'Jhun');
    //create a key of name
    //has an argument of 'Jhun'
    //need to have a parameter to match
  });

  it('should have a beard by default', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.bearded, true);
    //create a key of bearded
    //assign to true
  });

  it('should not always be bearded', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.bearded, false)
  });

  it('should have root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('chown lumos'), 'CHOWN LUMOS');
    //calling the method incantation()
    //has an argument
    //needs a parameter
  });

  it('should has lots of root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('Expecto Patronum'), 'EXPECTO PATRONUM');
  });

  it('should start rested', function() {
    // create wizard
    var wizard = new Wizard ({name: 'Napoleon', bearded: false});
    // assert isRested returns true
    assert.equal(wizard.isRested, true)
  });

  it('should be able to cast spells', function() {
    // create wizard
    var wizard = new Wizard ({name: 'Spam', bearded: true});
    // assert wizard.cast() returns 'MAGIC BULLET'
    assert.equal(wizard.cast(), 'MAGIC BULLET')
  });

  it('should only be able to cast 3 spells', function() {
    // create wizard
    var wizard = new Wizard ({name: 'Black Dynamite', bearded: true});
    // assert isRested is true
    assert.equal(wizard.isRested, true)
    // cast()
    wizard.cast()
    // assert isRested is true
    assert.equal(wizard.isRested, true)
    // cast()
    wizard.cast()
    // assert isRested is true
    assert.equal(wizard.isRested, true)
    // cast()
    wizard.cast()
    // assert isRested is false
    assert.equal(wizard.isRested, false)
    // assert cast() returns 'I SHALL NOT CAST!'
    assert.equal(wizard.cast(), 'I SHALL NOT CAST!')
  });
});
