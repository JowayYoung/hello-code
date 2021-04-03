// 命令
function Command(receiver) {
	this.receiver = receiver;
	this.execute = () => this.receiver.action();
};

// 接收者：打开电视
function Receiver1() {
	this.action = () => "Open";
};
// 接收者：关闭电视
function Receiver2() {
	this.action = () => "Close";
};

// 调用者：遥控器
function Invoker(onCommand, offCommand) {
	this.onCommand = onCommand;
	this.offCommand = offCommand;
	this.open = () => this.onCommand.execute();
	this.close = () => this.offCommand.execute();
};

// 客户端
const on = new Command(new Receiver1());
const off = new Command(new Receiver2());
const client = new Invoker(on, off);

console.log(client.open());
console.log(client.close());