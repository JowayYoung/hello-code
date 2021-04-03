function Debounce(fn, wait = 50) {
	let timer = null;
	return function(...args) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), wait);
	};
}