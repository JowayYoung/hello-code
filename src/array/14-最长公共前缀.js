/**
 * @name 14.最长公共前缀
 * @param {string[]} [strs=[]]
 * @method 依次将基准元素与后面元素比较，不断更新基准元素(不匹配从基准元素末尾删减1位)，直到基准元素与所有元素都满足最长公共前缀的条件
 * @return {string}
 */
function LongestCommonPrefix(strs = []) {
	if (!strs.length) return "";
	let prefix = strs[0];
	for (let i = 0; i < strs.length; i++) {
		const item = strs[i];
		while (prefix.length && !item.includes(prefix)) {
			prefix = prefix.slice(0, prefix.length - 1);
		}
	}
	return prefix;
}

console.log(LongestCommonPrefix(["flower", "flow", "flight"]));