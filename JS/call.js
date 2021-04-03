Function.prototype.xCall = function(ctx = window) {
	if (typeof this !== "function") {
		throw new Error("The param is not a function");
	}
	Reflect.set(ctx, "fn", this);
	const args = [...arguments].slice(1);
	const res = ctx.fn(args);
	Reflect.deleteProperty(ctx, "fn");
	return res;
};