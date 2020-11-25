/**
 * @name 344.反转字符串
 * @param {string} [str=""]
 * @return {string}
 * @method
 * @summary
 */
function FirstUniqChar(str) {
	if (!str) return "";
	const map = {};
	for (let i = 0; i < str.length; i++) {
		if (map[str[i]]) {
			map[str[i]]++;
		} else {
			map[str[i]] = 1;
		}
	}
	console.log(map);
	for (const k in map) {
		if (map[k] === 1) {
			return k;
		}
	}
	return -1;
}

console.log(FirstUniqChar("loveleetcode"));