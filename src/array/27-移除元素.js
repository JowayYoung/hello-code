/**
 * @name 27.移除元素
 * @param {number[]} [nums=[]]
 * @param {number} [val=0]
 * @method 若当前成员等于目标值则原地删除当前成员
 * @return {number}
 */
function RemoveElement(nums = [], val = 0) {
	if (!nums.length) return [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			i--; // for循环中移除元素必须递减索引
		}
	}
	return nums.length;
}

console.log(RemoveElement([3, 2, 2, 3], 3));