function InsertSort(nums = []) {
	const max = nums.length;
	for (let i = 1; i < max; i++) {
		let j = i; // 存储当前索引
		const cur = nums[i]; // 存储当前成员
		while (j >= 0 && nums[j - 1] > cur) {
			nums[j] = nums[j - 1];
			j--;
		}
		nums[j] = cur;
	}
	return nums;
}

console.log(InsertSort([4, 5, 1, 3, 2]));