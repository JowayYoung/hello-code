function Singleton(name) {
	this.instance = null; // 缓存已生成实例
	this.name = name;
	this.getName = () => this.name;
}

Singleton.getInstance = function(name) {
	// 定义静态方法检测是否存在实例缓存
	if (!this.instance) {
		this.instance = new Singleton(name);
	}
	return this.instance;
};

const s1 = Singleton.getInstance("young");
const s2 = Singleton.getInstance("tong");

console.log(s1 === s2);
console.log(s1.getName());
console.log(s2.getName());