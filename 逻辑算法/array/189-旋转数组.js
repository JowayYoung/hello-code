/**
 * @name 189.旋转数组
 * @param {number[]} [nums=[]]
 * @param {number} [p=0]
 * @return {number[]}
 * @method 以p为分割点切分数组，将前后两份互换位置
 * @summary 分割点
 */
function Rotate(nums = [], p = 0) {
	if (!nums.length) return [];
	const before = nums.slice(-p);
	const after = nums.slice(0, -p);
	return before.concat(after);
}

console.log(Rotate([1, 2, 3, 4, 5, 6, 7], 3));