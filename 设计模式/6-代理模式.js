// 代理
function Proxy(tgt) {
	this.tgt = tgt;
	this.send = thing => new Sender(tgt).send(thing);
}

// 目标对象
function Receive(name) {
	this.name = name;
}

// 代理对象
function Sender(tgt) {
	this.tgt = tgt;
	this.send = thing => `${tgt.name} receives ${thing}`;
}

const r = new Receive("tong");
const p = new Proxy(r);

console.log(p.send("flower"));