// Vue原理
function UpdateView(val) {
	console.log("更新视图啦~", val);
}

function DefineReactive(obj, key, val) {
	Object.defineProperty(obj, key, {
		configurable: true,
		enumerable: true,
		get: function() {
			return val;
		},
		set(newVal) {
			if (newVal === val) return;
			val = newVal;
			UpdateView && UpdateView(val);
		}
	});
}

function Observer(obj) {
	if (!obj || typeof obj !== "object") return;
	Object.keys(obj).forEach(v => DefineReactive(obj, v, obj[v]));
}

class Vue {
	constructor(opts) {
		this._data = opts.data;
		Observer(this._data);
	}
}

export default Vue;