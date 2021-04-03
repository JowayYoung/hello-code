function Bridge(name, age) {
	this.name = name;
	this.age = age;
	this.call = () => `${this.name.x} is ${this.age.x} years old`;
}

function Name(x) {
	this.x = x;
}

function Age(x) {
	this.x = x;
}

const n1 = new Name("young");
const n2 = new Name("tong");
const a1 = new Age(27);
const a2 = new Age(25);
const b1 = new Bridge(n1, a1);
const b2 = new Bridge(n2, a2);

console.log(b1.call());
console.log(b2.call());