/**
 * @name 26.删除排序数组中的重复项
 * @param {number[]} [nums=[]]
 * @return {number}
 * @method 若当前成员与下一成员相等则原地删除下一成员
 * @summary 原数组操作(节省内存空间)
 */
function RemoveDuplicates(nums = []) {
	if (!nums.length) return 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i + 1, 1);
			i--; // for循环中移除元素必须递减索引
		}
	}
	return nums.length;
}

console.log(RemoveDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));