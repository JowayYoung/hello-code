function Throttle(fn, wait = 50) {
	let pass = 0;
	return function(...args) {
		const now = +new Date();
		if (now - pass > wait) {
			pass = now;
			fn.apply(this, args);
		}
	};
}