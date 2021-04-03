function Prototype() {}

Prototype.prototype = {
	constructor: Prototype,
	number: [1, 2, 3, 4, 5]
};

const p1 = new Prototype();
const p2 = new Prototype();
p1.number.push(6);

console.log(p1.number === p2.number);
console.log(p1.number);
console.log(p2.number);