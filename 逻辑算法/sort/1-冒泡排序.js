function BubbleSort(nums = []) {
	const max = nums.length;
	for (let i = 0; i < max; i++) {
		for (let j = 0; j < max - 1 - i; j++) {
			if (nums[j] > nums[j + 1]) {
				[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
			}
		}
	}
	return nums;
}

console.log(BubbleSort([4, 5, 1, 3, 2]));