function New() {
	const obj = {}; // 创建新对象
	const constructor = [].shift.call(arguments); // 获取构造函数
	obj.__proto__ = constructor.prototype; // 链接到原形
	const res = constructor.apply(obj, arguments);
	return res instanceof Object ? res : obj;
}