function Constructor(name, age, sex) {
	// 强制使用new
	if (!(this instanceof Constructor)) {
		return new Constructor(name, age, sex);
	}
	this.name = name;
	this.age = age;
	this.sex = sex;
}

const c1 = new Constructor("young", 27, "male");
const c2 = Constructor("tong", 25, "female");

console.log(c1);
console.log(c2);