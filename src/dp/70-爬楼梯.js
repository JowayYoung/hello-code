/**
 * @name 70.爬楼梯
 * @param {number} [n=0]
 * @return {number}
 * @method 到达第n阶的方法总数是到达第(n-1)阶和到达第(n-2)阶的方法总数之和
 * @summary 斐波那契数列
 */
function ClimbStairs(n = 0) {
	const res = new Array(n + 1);
	res[0] = 0;
	res[1] = 1;
	res[2] = 2;
	for (let i = 3; i <= n; i++) {
		res[i] = res[i - 1] + res[i - 2];
	}
	return res[n];
}

console.log(ClimbStairs(5));