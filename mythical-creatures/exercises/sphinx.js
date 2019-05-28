class Sphinx {
  constructor () {
    this.riddles = [];
    this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
        this.riddles.shift();
    }
  }
  attemptAnswer(answer){
    var theOGLength = this.riddles.length 

   if (this.riddles = this.riddles.filter(function(riddle){
    return answer !== riddle.answer
}))
   if (theOGLength !== this.riddles.length) {
    return 'That wasn\'t that hard, I bet you don\'t get the next one';
   }
   if (this.riddle !== riddle.answer) {
    this.heroesEaten ++;
   }
  }
}


module.exports = Sphinx;