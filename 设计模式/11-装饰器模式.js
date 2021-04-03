function Decorator(tgt) {
	this.tgt = tgt;
	this.getName = function() {
		const name = this.tgt.getName();
		return this.call(name);
	};
	this.call = name => name + "!";
}

function Person(name) {
	this.name = name;
	this.getName = () => this.name;
}

const p = new Person("young");
const d = new Decorator(p);

console.log(p.getName());
console.log(d.getName());