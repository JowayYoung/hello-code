function SelectSort(nums = []) {
	const max = nums.length;
	for (let i = 0; i < max; i++) {
		for (let j = i + 1; j < max; j++) {
			if (nums[i] > nums[j]) {
				[nums[i], nums[j]] = [nums[j], nums[i]];
			}
		}
	}
	return nums;
}

console.log(SelectSort([4, 5, 1, 3, 2]));