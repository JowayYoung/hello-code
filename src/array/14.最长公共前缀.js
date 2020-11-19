/**
 * @name 14.最长公共前缀
 * @param {string[]} [strs=[]]
 * @return {string}
 */
function LongestCommonPrefix(strs = []) {
	if (!strs.length) return "";
	const prefix = strs[0];
	let res = "";
	for (let i = 0; i < strs.length; i++) {
		const flag = strs.every(w => w[i] === prefix[i]);
		if (flag) {
			res += prefix[i];
		} else {
			return res;
		}
	}
	return res;
}

console.log("No.14 →", LongestCommonPrefix(["flower", "flow", "flight"]));