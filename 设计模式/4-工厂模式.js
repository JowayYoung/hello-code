function Factory() {
	this.register = function(type) {
		let template = {};
		switch (type) {
		case "model":
			template = new Model();
			break;
		case "view":
			template = new View();
			break;
		case "ctrl":
			template = new Ctrl();
			break;
		default:
			template = {};
		}
		return template;
	};
}

function Model() {
	this.role = "model";
}

function View() {
	this.role = "view";
}

function Ctrl() {
	this.role = "ctrl";
}

const f = new Factory();
const model = f.register("model");
const view = f.register("view");
const ctrl = f.register("ctrl");

console.log(model);
console.log(view);
console.log(ctrl);