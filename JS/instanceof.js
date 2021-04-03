function Instanceof(left, right) {
	left = left.__proto__;
	right = right.prototype;
	while (true) {
		if (left === null) return false;
		if (left === right) return true;
		left = left.__proto__;
	}
}

function Person(name, age) {
	this.name = name;
	this.age = age;
}

const person = new Person("young", 27);

console.log(Instanceof(person, Person));

console.log(Instanceof(person, Object));
console.log(Instanceof(Person, Object));

console.log(Instanceof(person, Function));
console.log(Instanceof(Person, Function));

console.log(Instanceof(person, Array));
console.log(Instanceof(Person, Array));