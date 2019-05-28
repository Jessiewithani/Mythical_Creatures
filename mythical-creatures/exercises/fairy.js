class Fairy {
  constructor (name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured'
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust ++;
  }
  believe() {
    this.dust += 10
  }
  makeDresses(arrayOfFlowerNamesAsStrings) {
    for (var i = 0; i < arrayOfFlowerNamesAsStrings.length; i ++) {
      this.clothes.dresses.push(arrayOfFlowerNamesAsStrings[i]);
    }
  }
  provoke () {
    this.disposition = 'Vengeful';
  }
  replaceInfant (infantObject) {
   
    if (this.disposition === 'Vengeful'){
      infantObject.disposition = 'Malicious';
       this.humanWards.push(infantObject)
       if (this.humanWards.length >= 3) {
        this.disposition = 'Good natured';
       }
    } else {
      return infantObject;
    }
  }
}


module.exports = Fairy;