/**
 * @name 189.旋转数组
 * @param {number[]} [nums=[]]
 * @param {number} [k=0]
 * @return {number[]}
 */
function Rotate(nums = [], k = 0) {
	if (!nums.length) return [];
	return [...nums.slice(-k), ...nums.slice(0, -k)];
}

console.log("No.189 →", Rotate([1, 2, 3, 4, 5, 6, 7], 3));