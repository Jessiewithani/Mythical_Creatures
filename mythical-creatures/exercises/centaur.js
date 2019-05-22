class Centaur {
	//constructor creates the Objects ()
	constructor (name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.activities = 0;
		this.layingDown = false;
	}
	shoot () { //method
		this.activities ++;
		if (this.activities > 2) {
			this.cranky = true;
			return 'NO!'
		} 

		if (this.layingDown === true) {
			return 'NO!'
		}

		if (this.standing === true) {
			return 'Twang!!!'	
		}
	}
	run () { //method
		this.activities ++;
		if (this.activities >= 3) {
			this.cranky = true;
		} else if (this.layingDown === true) {
			return 'NO!'
		}
		if(this.standing === true) {

		return 'Clop clop clop clop!!!'
		}
	}
	sleep () { //method
		if (this.standing === true) {
			return 'NO!'
		}
		if(this.layingDown === true){
			this.activities = 0;
			this.cranky = false;
		return 'ZZZZ';

		}
	}
	layDown () { //method
		this.layingDown = true
		this.standing = false;

	}
	standUp () {  //method
		this.standing = true
		this.layingDown = false;
	}
	drinkPotion () {
		if (!this.standing) {
			this.cranky = true;
			console.log(this.cranky)
		return 'Not while I\'m laying down!'
		} else if (this.cranky == false) {
			this.cranky = true;
		} else {
			this.cranky = false;
		}

	}

}





module.exports = Centaur;