/**
 * @name 53.最大子序和
 * @param {number[]} [nums=[]]
 * @return {number}
 * @method dp[i]=max(dp[0],dp[1],...,d[i-1],dp[i])
 * @summary 状态转移方程
 */
function MaxSubArray(nums = []) {
	if (!nums.length) return 0;
	const dp = new Array(nums.length);
	let res = nums[0];
	dp[0] = nums[0];
	for (let i = 1; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
		res = Math.max(dp[i], res);
	}
	return res;
}

console.log(MaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));