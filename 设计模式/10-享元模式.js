const EXISTING_COMPONENTS = {};
const COMPONENT_DATABASE = {};

// 最小粒度
function Component(id, name, desc) {
	this.id = id;
	this.name = name;
	this.desc = desc;
}

// 粒度工厂
function ComponentFactory() {
	return {
		create(id, name, desc) {
			const component = EXISTING_COMPONENTS[id];
			if (component) {
				return component;
			} else {
				const _component = new Component(id, name, desc);
				EXISTING_COMPONENTS[id] = _component;
				return _component;
			}
		}
	};
};

function Flyweight() {
	return {
		add(id, name, desc, mounted, unmounted, update) {
			const component = ComponentFactory().create(id, name, desc);
			COMPONENT_DATABASE[id] = {
				component,
				mounted,
				unmounted,
				update
			};
		}
	};
};

Flyweight().add(123, "young", "good", () => console.log("mounted"), () => console.log("unmounted"), () => console.log("update"));
Flyweight().add(456, "tong", "good", () => console.log("mounted"), () => console.log("unmounted"), () => console.log("update"));

console.log(EXISTING_COMPONENTS);
console.log(COMPONENT_DATABASE);