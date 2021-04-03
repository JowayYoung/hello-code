function State() {
	this.state = null;
	this.change = light => {
		this.state = light.show();
		return this.state;
	};
}

function RedLight() {
	this.show = () => "Stop";
}
function GreenLight() {
	this.show = () => "Go";
}
function YellowLight() {
	this.show = () => "Warn";
}

const s = new State();

console.log(s.change(new RedLight()));
console.log(s.change(new GreenLight()));
console.log(s.change(new YellowLight()));