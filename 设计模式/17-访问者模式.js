const Visitor = (function() {
	return {
		pop(...rest) {
			return Array.prototype.pop.apply(rest[0]);
		},
		push(...rest) {
			const len = rest[0].length || 0;
			const args = this.splice(rest, 1);
			rest[0].length = len + rest.length - 1;
			return Array.prototype.push.apply(rest[0], args);
		},
		splice(...rest) {
			const args = Array.prototype.splice.call(rest, 1);
			return Array.prototype.splice.apply(rest[0], args);
		}
	};
})();

const a = {};
Visitor.push(a, 1, 2, 3, 4);
Visitor.push(a, 4, 5, 6);
Visitor.pop(a);
Visitor.splice(a, 2);

console.log(a);