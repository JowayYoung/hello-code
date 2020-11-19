/**
 * @name 122.买卖股票的最佳时机
 * @param {number[]} [nums=[]]
 * @method 累加所有上升空间
 * @return {number}
 */
function MaxProfit(nums = []) {
	const max = nums.length;
	if (max < 2) return 0;
	return nums.reduce((t, v, i, arr) => t + (arr[i + 1] > v && i + 1 <= max - 1 ? arr[i + 1] - v : 0), 0);
}

console.log("No.122 →", MaxProfit([7, 1, 5, 3, 6, 4]));