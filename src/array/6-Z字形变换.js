/**
 * @name 6.Z字形变换
 * @param {string} [str=""]
 * @param {number} [row=3]
 * @return {string}
 * @method 画图分析周期规律，依据行数初始空字符串数组，通过[x=i%period]和[Math.min(x,period-x)]将字符插入到数组中
 * @summary 周期(2n-2)
 */
function Convert(str = "", row = 3) {
	if (!str.length || row < 3) return str;
	const res = new Array(row).fill("");
	const period = 2 * row - 2;
	for (let i = 0; i < str.length; i++) {
		const x = i % period;
		res[Math.min(x, period - x)] += str[i];
	}
	return res.join("");
}

console.log(Convert("LEETCODEISHIRING", 4));