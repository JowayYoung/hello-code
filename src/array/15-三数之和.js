/**
 * @name 15.三数之和
 * @param {number[]} [nums=[]]
 * @return {number[]}
 * @method 初始三指针分别为首位(index)、次位(left)和末尾(right)，每次循环多次移动left和right并计算left+right是否等于0(若)，循环完毕累加index
 * @summary 三指针，差值(left+right=0，若两者之和小于0则left太小得向右移，若两者之和大于0则right太大得向左移)
 */
function ThreeSum(nums = []) {
	if (nums.length < 3) return [];
	const res = [];
	const _nums = nums.sort((a, b) => a - b);
	for (let i = 0; i < _nums.length; i++) {
		let left = i + 1;
		let right = _nums.length - 1;
		const target = 0 - _nums[i];
		if (_nums[i] > 0) {
			break;
		}
		if (i === 0 || _nums[i] !== _nums[i - 1]) {
			while (left < right) {
				if (_nums[left] + _nums[right] < target) {
					left++; // 两者之和小于0则left太小得向右移
				} else if (_nums[left] + _nums[right] > target) {
					right--; // 两者之和大于0则right太大得向左移
				} else {
					res.push([_nums[i], _nums[left], _nums[right]]);
					while (left < right && _nums[left] === nums[left + 1]) left++; // 相邻成员相同则跳过
					while (left < right && _nums[right] === nums[right - 1]) right--; // 相邻成员相同则跳过
					left++;
					right--;
				}
			}
		}
	}
	return res;
}

console.log(ThreeSum([-1, 0, 1]));
console.log(ThreeSum([-1, 0, 1, 2, -1, -4]));