/**
 * @name 300.最长上升子序列
 * @param {number[]} [nums=[]]
 * @return {number}
 * @method dp[i]=max(dp[j]+1,dp[k]+1,dp[l]+1,...) [i>j,k,l...]
 * @summary 状态转移方程
 */
function LengthOfLIS(nums = []) {
	if (!nums.length) return 0;
	const dp = new Array(nums.length);
	let res = 1;
	for (let i = 0; i < nums.length; i++) {
		dp[i] = 1;
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[j] + 1, dp[i]);
			}
		}
		res = Math.max(res, dp[i]);
	}
	return res;
}

console.log(LengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));