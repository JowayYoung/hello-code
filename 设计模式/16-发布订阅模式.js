// 在观察者模式上，在观察者(订阅者)与被观察者(发布者)之间增加一个调度中心，让调度中心去通知各个订阅者
class PubSub {
	constructor() {
		this.list = {};
	}
	publish(...args) {
		const key = [].shift.call(args);
		const fns = this.list[key];
		if (!fns || !fns.length) return false;
		for (let i = 0; i < fns.length; i++) {
			fns[i].apply(this, args);
		}
	}
	subscribe(k, cb) {
		if (!this.list[k]) {
			this.list[k] = [];
		}
		this.list[k].push(cb);
	}
	unsubscribe(k) {
		Reflect.deleteProperty(this.list, k);
	}
}

// 例子
const pubSub = new PubSub();
pubSub.subscribe("name", name => console.log("your name is " + name));
pubSub.subscribe("age", age => console.log("your age is " + age));
pubSub.publish("name", "yzw");
pubSub.publish("age", "27");
pubSub.unsubscribe("name");