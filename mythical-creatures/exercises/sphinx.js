class Sphinx {
  constructor () {
    this.riddles = [];
  }
  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
        this.riddles.shift();
    }
  }
  attemptAnswer(answer){
    if (this.riddles === answer) {
    } 
    this.riddles = [];
  }
}



module.exports = Sphinx;