function Strategic(config = {}, type = {}) {
	this.config = config;
	this.type = type;
	this.message = [];
	this.error = () => this.message.length !== 0;
	this.validate = function(data) {
		this.message = [];
		for (const k in data) {
			if (data.hasOwnProperty(k)) {
				const useMethod = this.config[k];
				const checker = this.type[useMethod];
				if (!useMethod) continue;
				if (!checker) {
					throw new Error({
						name: "ValidationError",
						tips: `Nonexistent Method: ${useMethod}`
					});
				}
				const flag = checker.validate(data[k]);
				if (!flag) {
					const msg = `Invalid Value \`${k}\`: ${checker.tips}`;
					this.message.push(msg);
				}
			}
		}
		return this.error();
	};
};

const config = {
	age: "isNumber",
	desc: "isWord",
	name: "isRequired"
};
const type = {
	isNumber: {
		tips: "输入值只能是数字",
		validate: val => !isNaN(val)
	},
	isRequired: {
		tips: "输入值不能为空",
		validate: val => val !== ""
	},
	isWord: {
		tips: "输入值只能是数字和字母",
		validate: val => /[a-z0-9]/i.test(val)
	}
};
const s = new Strategic(config, type);
s.validate({
	age: "unknown",
	desc: "hello",
	name: ""
});
if (s.error()) {
	console.log(s.message.join("\n"));
}