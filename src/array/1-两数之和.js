/**
 * @name 1.两数之和
 * @param {number[]} [nums=[]]
 * @param {number} [tgt=0]
 * @return {number[]}
 * @method 使用哈希表保存[差值:i](差值=目标值-成员)，若后面成员遇上哈希表存在[差值:i](差值=后面成员)时则返回i和后面成员的索引
 */
function TwoSum(nums = [], tgt = 0) {
	if (!nums.length) return 0;
	const map = {};
	for (let i = 0; i < nums.length; i++) {
		const val = nums[i];
		if (map[val] === undefined) {
			map[tgt - val] = i;
		} else {
			return [map[val], i];
		}
	}
	return [];
}

console.log(TwoSum([2, 7, 11, 15], 9));