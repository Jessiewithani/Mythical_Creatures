class Medusa {
	constructor(name){
		this.name = name;
		this.statues = [];
		// this.stare = function(object){
		// 	this.statues.push(object)

		// }
	}
	stare(object) {
		if(this.statues.length > 2){
			var unStatuedPerson = this.statues.shift();
			unStatuedPerson.stoned = false;
			console.log('what is that unStatuedPerson', unStatuedPerson)
			// this.statues.shift();
		}
		// console.log('what object', object.stoned)
		object.stoned = true;
		this.statues.push(object);
		// this.appetite = (this.statues.length >= 3) ? 'full' : 'hungry'

	}

}






module.exports = Medusa;