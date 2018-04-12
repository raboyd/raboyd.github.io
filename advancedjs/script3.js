//Evaluate these:
//#1
//ans=false
//[2] === [2] 
//ans=false
//{} === {} 

//#2 what is the value of property a for each object.
//ans=object1, 2 & 3 = 4; object 4 = 5
const object1 = { a: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { a: 5};
object1.a = 4;

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
	constructor (name, type, colour){
		this.name = name;
		this.type = type;
		this.colour = colour;
	}

	move(){
		console.log(`${this.name} the ${this.type} just moved!`);
	}
}

class Mamal extends Animal {
	constructor (name, type, colour){
		super(name, type, colour);
	}

	sayName(){
		switch (this.type){
			case "cow":
				console.log(`Moooooo! My name is ${this.name} and I'm a ${this.colour} ${this.type}`);
				break;
			default:
				console.log(`My name is ${this.name} and I'm a ${this.colour} ${this.type}`);
				break;
		}
	}
}

class Fish extends Animal {
	constructor (name, colour){
		super(name, "fish", colour);
	}

	swim(){
		this.move();
		console.log("Her fins are aching!");
	}
}

let daisy = new Mamal("Daisy", "cow", "black and white");
let bertie = new Animal("Bertie", "beetle", "green");
let dory = new Fish("Dory", "blue and yellow");