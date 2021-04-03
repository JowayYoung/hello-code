const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

// 简易版
function PromiseX(fn) {
	const that = this;
	that.state = PENDING;
	that.value = null;
	that.resolvedCbs = [];
	that.rejectedCbs = [];
	const resolve = function(val) {
		setTimeout(() => {
			if (that.state !== PENDING) return;
			that.state = RESOLVED;
			that.value = val;
			that.resolvedCbs.map(cb => cb(that.value));
		}, 0);
	};
	const reject = function(val) {
		setTimeout(() => {
			if (that.state !== PENDING) return;
			that.state = REJECTED;
			that.value = val;
			that.rejectedCbs.map(cb => cb(that.value));
		}, 0);
	};
	try {
		fn(resolve, reject);
	} catch (e) {
		reject(e);
	}
}
PromiseX.prototype.then = function(onFulfilled, onRejected) {
	const that = this;
	onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v;
	onRejected = typeof onRejected === "function" ? onRejected : e => { throw e; };
	if (that.state === PENDING) {
		that.resolvedCbs.push(onFulfilled);
		that.rejectedCbs.push(onRejected);
	}
	if (that.state === RESOLVED) {
		onFulfilled(that.value);
	}
	if (that.state === REJECTED) {
		onRejected(that.value);
	}
};

new PromiseX((resolve, reject) => {
	setTimeout(() => resolve(123), 5000);
}).then(res => console.log(res), err => console.log(err));