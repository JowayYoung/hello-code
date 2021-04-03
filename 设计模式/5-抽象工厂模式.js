function AbstractFactory(subType, supType) {
	if (typeof AbstractFactory[supType] === "function") {
		function F() {} // 缓存父类
		F.prototype = new AbstractFactory[supType](); // 继承父类属性
		subType.constructor = subType; // 将子类构造函数指向子类
		subType.prototype = new F(); // 子类原型继承父类
	} else {
		throw new Error("Not Abstract Class");
	}
}

AbstractFactory.Product1 = function() {
	this.type = "type 1";
	this.getType = () => this.type;
};

AbstractFactory.Product2 = function() {
	this.type = "type 2";
	this.getType = () => this.type;
};

function XProduct1(name) {
	this.name = name;
}
AbstractFactory(XProduct1, "Product1");
XProduct1.prototype.getType = () => "This is Product1";

function XProduct2(name) {
	this.name = name;
}
AbstractFactory(XProduct2, "Product2");
XProduct2.prototype.getType = () => "This is Product2";

const p1 = new XProduct1("young");
const p2 = new XProduct2("tong");

console.log(p1.name, p1.type, p1.getType());
console.log(p2.name, p2.type, p2.getType());