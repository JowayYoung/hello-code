/**
 * @name 14.最长公共前缀
 * @param {string[]} [strs=[]]
 * @method 取首位成员作为基准，依次将基准与后面成员比较，不断更新基准(若不匹配则基准末尾删减1位)，直至基准与所有成员都相等
 * @return {string}
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