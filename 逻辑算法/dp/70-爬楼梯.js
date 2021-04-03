/**
 * @name 70.爬楼梯
 * @param {number} [n=0]
 * @return {number}
 * @method dp[i]=dp[i-1]+dp[i-2]
 * @summary 状态转移方程
 */
function ClimbStairs(n = 0) {
	const dp = new Array(n + 1);
	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 2;
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
}

console.log(ClimbStairs(5));