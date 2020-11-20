/**
 * @name 283.移动零
 * @param {number[]} [nums=[]]
 * @return {number[]}
 */
function MoveZeroes(nums = []) {
	return nums.sort((a, b) => b === 0 ? -1 : 1);
}

console.log("No.283 →", MoveZeroes([0, 1, 0, 3, 12]));