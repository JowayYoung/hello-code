Function.prototype.xApply = function(ctx = window) {
	if (typeof this !== "function") {
		throw new Error("The param is not a function");
	}
	Reflect.set(ctx, "fn", this);
	const res = arguments[1] ? ctx.fn(...arguments[1]) : ctx.fn();
	Reflect.deleteProperty(ctx, "fn");
	return res;
};