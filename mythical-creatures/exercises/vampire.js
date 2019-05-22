class Vampire {
	constructor(name, pet= 'bat'){
		this.name = name;
		this.pet = pet;
		this.thirsty = true;
	
	}
	drink(){
		if(this.thirsty =false){
			return false
		}
	}
}










module.exports = Vampire;