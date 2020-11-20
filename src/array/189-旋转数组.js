/**
 * @name 189.旋转数组
 * @param {number[]} [nums=[]]
 * @param {number} [k=0]
 * @method 以k为分割点将数组切分，将前后两分互换位置
 * @return {number[]}
 */
function Rotate(nums = [], k = 0) {
	if (!nums.length) return [];
	return [...nums.slice(-k), ...nums.slice(0, -k)];
}

console.log(Rotate([1, 2, 3, 4, 5, 6, 7], 3));