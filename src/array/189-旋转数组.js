/**
 * @name 189.旋转数组
 * @param {number[]} [nums=[]]
 * @param {number} [p=0]
 * @method 以p为分割点切分数组，将前后两份互换位置
 * @return {number[]}
 */
function Rotate(nums = [], p = 0) {
	if (!nums.length) return [];
	return [...nums.slice(-p), ...nums.slice(0, -p)];
}

console.log(Rotate([1, 2, 3, 4, 5, 6, 7], 3));