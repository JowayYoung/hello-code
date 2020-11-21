/**
 * @name 66.加一
 * @param {number[]} [nums=[]]
 * @method 初始进位为1，从末位成员开始累加进位，若累加值等于10则初始成员为0并保持进位为1，否则初始进位为0，还需对首位成员判断是否等于10
 * @return {number[]}
 */
function PlusOne(nums = []) {
	if (!nums.length) return [];
	let bit = 1;
	const max = nums.length - 1;
	for (let i = max; i >= 0; i--) {
		nums[i] += bit;
		if (nums[i] === 10) {
			nums[i] = 0;
			i === 0 ? nums.unshift(1) : (bit = 1);
		} else {
			bit = 0;
		}
	}
	return nums;
}

console.log(PlusOne([4, 3, 2, 1]));
console.log(PlusOne([4, 3, 2, 9]));
console.log(PlusOne([9, 9, 9, 9]));