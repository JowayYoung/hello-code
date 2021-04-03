// 两个角色：
// 被观察者Subject：维护一个observer列表
// 观察者Observer：在Observer中定义一个更新方法，用来执行相关操作
// 原理：
// 当某个值发生变化后，Subject调用notify方法
// 实际就是循环调用observerList中每个observer的update方法，并把新的值作为update的参数传递进去

// 观察者列表
class ObserverList {
	constructor() {
		this.observerList = [];
	}
	add(obj) {
		this.observerList.push(obj);
	}
	count() {
		return this.observerList.length;
	}
	get(i) {
		return i > -1 && i < this.count() ? this.observerList[i] : null;
	}
	has(obj, startI = 0) {
		let i = startI;
		while (i < this.observerList.length) {
			if (this.observerList[i] === obj) {
				return i;
			}
			i++;
		}
		return -1;
	}
	remove(i) {
		this.observerList.splice(i, 1);
	}
}

// 观察者
class Observer {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	update(ctx) {
		console.log(ctx);
	}
}

// 被观察者(目标)
class Subject {
	constructor() {
		this.observers = new ObserverList();
	}
	addObserver(observer) {
		this.observers.add(observer);
	}
	notify(ctx) {
		const max = this.observers.count();
		for (let i = 0; i < max; i++) {
			this.observers.get(i).update(ctx);
		}
	}
	removeObserver(observer) {
		this.observers.remove(this.observers.has(observer));
	}
}

// 例子
const fd = new Subject();
const zk1 = new Observer("yzw", 27);
const zk2 = new Observer("tyj", 25);

fd.addObserver(zk1);
fd.addObserver(zk2);
fd.notify("有房出租啦");