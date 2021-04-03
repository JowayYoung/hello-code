function Mediator(a, b) {
	this.a = a;
	this.b = b;
	this.setA = function() {
		const number = this.b.number;
		this.a.setNumber(number * 10);
	};
	this.setB = function() {
		const number = this.a.number;
		this.b.setNumber(number / 10);
	};
}

function A() {
	this.number = 0;
	this.setNumber = function(num, m) {
		this.number = num;
		m && m.setB();
	};
}

function B() {
	this.number = 0;
	this.setNumber = function(num, m) {
		this.number = num;
		m && m.setA();
	};
}

const a = new A();
const b = new B();
const m = new Mediator(a, b);

a.setNumber(10, m);
console.log(a.number, b.number);

b.setNumber(10, m);
console.log(a.number, b.number);