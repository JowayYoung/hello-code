function Composite() {
	this.list = [];
	this.add = function(val) {
		this.list.push(val);
		return this;
	};
	this.create = function(val) {
		this.list.forEach(v => v.create());
		return this;
	};
}

function Order1() {
	this.create = () => console.log("Order1");
}

function Order2() {
	this.create = () => console.log("Order2");
}

const c = new Composite();
const p1 = new Order1();
const p2 = new Order2();
c.add(p1).add(p2).create();