const Fs = require("fs");
const Path = require("path");
const { transformFromAst } = require("@babel/core");
const { parse } = require("@babel/parser");
const BabelTraverse = require("@babel/traverse").default;

function GenerateCode(entry) {
	const gragh = JSON.stringify(MakeDepsGraph(entry));
	return `
        (function(gragh) {
            function require(module) {
                // 相对路径转换成绝对路径的方法
                function localRequire(relativePath) {
                    return require(gragh[module].deps[relativePath]);
                }
                var exports = {};
                (function(require, exports, code) {
                    eval(code);
                })(localRequire, exports, gragh[module].code);
                return exports;
            }
            require("${entry}");
        })(${gragh});
    `;
}

function MakeDepsGraph(entry) {
	const entryModule = ParseEntry(entry);
	const graphSet = [entryModule]; // 将入口文件解析结果追加搭到图谱中
	for (let i = 0; i < graphSet.length; i++) {
		const { deps } = graphSet[i]; // 获取当前模块的依赖
		if (deps) {
			for (const j in deps) {
				const item = ParseEntry(deps[j]);
				graphSet.push(item); // 将当前模块所依赖模块的解析结果追加到图谱中
			}
		}
	}
	return graphSet.reduce((t, v) => {
		t[v.path] = { code: v.code, deps: v.deps };
		return t;
	}, {});
}

function ParseEntry(path) {
	const deps = {};
	const content = Fs.readFileSync(path, "utf8");
	const ast = parse(content, { sourceType: "module" }); // 读取JS返回AST
	const { code } = transformFromAst(ast, null, { presets: ["@babel/preset-env"] }); // 分析AST返回JS
	BabelTraverse(ast, {
		ImportDeclaration({ node }) {
			const dir = Path.dirname(path);
			const newDir = Path.join(dir, node.source.value).replace("\\", "/");
			deps[node.source.value] = newDir;
		}
	}); // 遍历AST收集依赖
	return { code, deps, path };
};

const result = GenerateCode("test/index.js");
console.log(result);