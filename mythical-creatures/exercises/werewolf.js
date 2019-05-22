class Werewolf {
	constructor (name, location) {
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
		this.counter = 0;
		this.hungry = false;
	}
	change(){
		this.human = !this.human;
		this.wolf = !this.wolf;
		this.hungry = !this.hungry; //toggle?
		}
		eat (unluckyGuy) {
			if (this.hungry == true) {
			unluckyGuy.alive = false;
			this.change();
			}
		}
	
	}


module.exports = Werewolf;