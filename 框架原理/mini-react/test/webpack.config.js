const Path = require("path");

const babelOpts = {
	plugins: [
		["@babel/plugin-transform-react-jsx", { pragma: "createElement" }]
	],
	presets: [
		"@babel/preset-env"
	]
};

function AbsPath(path = "") {
	return Path.join(__dirname, path);
}

module.exports = {
	entry: AbsPath("./index.js"),
	// mode: "development",
	module: {
		rules: [{
			exclude: /node_modules/,
			test: /\.js$/,
			use: [{ loader: "babel-loader", options: babelOpts }]
		}]
	},
	optimization: {
		// minimize: false
	},
	output: {
		filename: "bundle.js",
		path: AbsPath(".")
	}
};