/**
 * @name 26.删除排序数组中的重复项
 * @param {number[]} [nums=[]]
 * @return {number}
 */
function RemoveDuplicates(nums = []) {
	if (!nums.length) return 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i + 1, 1);
			i--; // for循环中移除元素记得递减索引
		}
	}
	return nums.length;
}

console.log("No.26 →", RemoveDuplicates([1, 1, 2]));