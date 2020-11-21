/**
 * @name 14.最长公共前缀
 * @param {string[]} [strs=[]]
 * @return {string}
 * @method 以首位成员为基准，依次将基准与后面成员比较，不断更新基准(若后面成员不包含基准则删减基准末位)直至与所有成员都相等
 */
function LongestCommonPrefix(strs = []) {
	if (!strs.length) return "";
	let prefix = strs[0];
	strs.forEach(v => {
		while (prefix.length && !v.includes(prefix)) {
			prefix = prefix.slice(0, prefix.length - 1);
		}
	});
	return prefix;
}

console.log(LongestCommonPrefix(["flower", "flow", "flight"]));