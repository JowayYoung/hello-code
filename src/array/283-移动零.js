/**
 * @name 283.移动零
 * @param {number[]} [nums=[]]
 * @return {number[]}
 * @method 若当前成员等于0则原地删除当前成员并使用新数组保存0，遍历完毕将新数组追加到原数组上
 */
function MoveZeroes(nums = []) {
	if (!nums.length) return [];
	const zeros = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			nums.splice(i, 1);
			i--; // for循环中移除元素必须递减索引
			zeros.push(0);
		}
	}
	return nums.concat(zeros);
}

console.log(MoveZeroes([0, 1, 0, 3, 12]));