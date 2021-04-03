function Iterator(conatiner) {
	this.list = conatiner.list;
	this.index = 0;
	this.next = function() {
		if (this.hasNext()) {
			return this.list[this.index++];
		}
		return null;
	};
	this.hasNext = function() {
		if (this.index >= this.list.length) {
			return false;
		}
		return true;
	};
}

function Container(list) {
	this.list = list;
	this.getIterator = () => new Iterator(this);
}

const c = new Container([1, 2, 3, 4, 5]);
const i = c.getIterator();
while (i.hasNext()) {
	console.log(i.next());
}