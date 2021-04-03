Function.prototype.xBind = function(ctx = window) {
	if (typeof this !== "function") {
		throw new Error("The param is not a function");
	}
	const _this = this;
	const args = [...arguments].slice(1);
	return function F() {
		if (this instanceof F) {
			return new _this(...args, ...arguments);
		}
		return _this.apply(ctx, args.concat(...arguments));
	};
};