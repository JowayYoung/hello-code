/**
 * @name 344.反转字符串
 * @param {string} [str=""]
 * @return {string}
 * @method 初始left指针(指向头部)和right指针(指向尾部)，分别递增和递减并互相赋值，直至[left>right]
 * @summary 双指针(记录颠倒位置)
 */
function ReverseString(str) {
	if (!str) return "";
	const _str = str.split("");
	let left = 0;
	let right = _str.length - 1;
	while (left < right) {
		[_str[left], _str[right]] = [_str[right], _str[left]];
		left++;
		right--;
	}
	return _str.join("");
}

console.log(ReverseString("hello"));