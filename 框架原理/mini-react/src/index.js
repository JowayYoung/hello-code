class ElementWrapper {
	constructor(type) {
		this.root = document.createElement(type);
	}
	setAttribute(name, val) {
		this.root.setAttribute(name, val);
	}
	appendChild(cpn) {
		this.root.appendChild(cpn.root);
	}
}

class TextWrapper {
	constructor(text) {
		this.root = document.createTextNode(text);
	}
}

class Component {
	constructor() {
		this.props = Object.create(null);
		this.children = [];
		this._root = null;
	}
	setAttribute(name, val) {
		this.props[name] = val;
	}
	appendChild(cpn) {
		this.children.push(cpn);
	}
	get root() {
		if (!this._root) {
			this._root = this.render().root;
		}
		return this._root;
	}
}

/* eslint-disable new-cap */
function createElement(type, attrs, ...children) {
	const elem = typeof type === "string" ? new ElementWrapper(type) : new type();
	const insertChildren = (c = []) => c.forEach(v => {
		const item = typeof v === "string" ? new TextWrapper(v) : v;
		Array.isArray(item) ? insertChildren(item) : elem.appendChild(item);
	});
	for (const v in attrs) {
		elem.setAttribute(v, attrs[v]);
	}
	insertChildren(children);
	return elem;
}
/* eslint-enable */

function render(cpn, elem) {
	elem.appendChild(cpn.root);
}

export {
	Component,
	createElement,
	render
};