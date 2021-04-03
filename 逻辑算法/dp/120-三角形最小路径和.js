/**
 * @name 120.三角形最小路径和
 * @param {number[]} [nums=[]]
 * @return {number}
 * @method dp[i,j]=min(dp[i-1,j-1],dp[i-1,j])+triangle[i,j]
 * @summary 状态转移方程
 */
function MinimumTotal(nums = []) {
	if (!nums.length) return 0;
	const dp = new Array(nums.length + 1).fill(0);
	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = 0; j < nums[i].length; j++) {
			dp[j] = Math.min(dp[j], dp[j + 1]) + nums[i][j];
		}
	}
	return dp[0];
}

console.log(MinimumTotal([
	[2],
	[3, 4],
	[6, 5, 7],
	[4, 1, 8, 3]
]));