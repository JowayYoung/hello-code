/**
 * @name 122.买卖股票的最佳时机
 * @param {number[]} [nums=[]]
 * @return {number}
 * @method 累加所有上升空间(相邻成员差值为正数)
 */
function MaxProfit(nums = []) {
	if (nums.length < 2) return 0;
	return nums.reduce((t, v, i, arr) => t += v < arr[i + 1] ? (arr[i + 1] - v) : 0, 0);
}

console.log(MaxProfit([7, 1, 5, 3, 6, 4]));