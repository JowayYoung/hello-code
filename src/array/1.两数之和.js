/**
 * @name 1.两数之和
 * @param {number[]} [nums=[]]
 * @param {number} [tgt=0]
 */
function TwoSum(nums = [], tgt = 0) {
	if (!nums.length) return 0;
	const map = {};
	for (let i = 0; i < nums.length; i++) {
		if (map[nums[i]] === undefined) {
			map[tgt - nums[i]] = i;
		} else {
			return [map[nums[i]], i];
		}
	}
	return [];
}

console.log(TwoSum([2, 7, 11, 15], 9));