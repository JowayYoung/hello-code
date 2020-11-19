/**
 * @name 27.移除元素
 * @param {number[]} [nums=[]]
 * @param {number} val
 * @return {number}
 */
function RemoveElement(nums = [], val) {
	if (!nums.length) return 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			i--; // for循环中移除元素记得递减索引
		}
	}
	return nums.length;
}

console.log("No.27 →", RemoveElement([3, 2, 2, 3], 3));