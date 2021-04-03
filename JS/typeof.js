function Typeof(tgt, type) {
	const dataType = Object.prototype.toString.call(tgt).replace(/\[object (\w+)\]/, "$1").toLowerCase();
	return type ? dataType === type : dataType;
}

const dataType = [
	Typeof(undefined),
	Typeof(null),
	Typeof("young"),
	Typeof(20190214),
	Typeof(true),
	Typeof(Symbol("unq")),
	Typeof({}),
	Typeof([]),
	Typeof(new Set()),
	Typeof(new Map()),
	Typeof(new WeakSet()),
	Typeof(new WeakMap()),
	Typeof(function call() {}),
	Typeof(new Date()),
	Typeof(new RegExp("/abc/", "g")),
	Typeof(new Error("error"))
].reduce((t, v) => (t.push(v), t), []).join("\n");
console.log(dataType);

const isDataType = [
	Typeof([], "object"),
	Typeof({}, "object")
].reduce((t, v) => (t.push(v), t), []).join("\n");
console.log(isDataType);