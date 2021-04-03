// 给定一个整数数组nums和一个目标值target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素

function SumNums(nums = [], tgt = 0) {
	const diff = {}; // 记录遍历过的成员
	const max = nums.length;
	for (let i = 0; i < max; i++) {
		const val = diff[tgt - nums[i]];
		if (val !== undefined) { // 从记录中找到和当前值相加等于目标值的就返回
			return [val, i];
		} else {
			diff[nums[i]] = i;
		}
	}
}

console.log(SumNums([2, 7, 11, 15], 9));

// 给你两个有序整数数组nums1和nums2，请你将nums2合并到nums1中，使nums1成为一个有序数组
// 初始化nums1和nums2的元素数量分别为m和n。你可以假设nums1有足够的空间（空间大小大于或等于m+n）来保存nums2中的元素

function MergeNums(nums1 = [], m, nums2 = [], n) {
	// 定义两个数组的尾指针和最终数组的尾指针
	let i = m - 1;
	let j = n - 1;
	let k = m + n - 1;
	// 两数组都没遍历完时同步移动
	while (i >= 0 && j >= 0) {
		if (nums1[i] >= nums2[j]) {
			nums1[k] = nums1[i];
			i--;
			k--;
		} else {
			nums1[k] = nums2[j];
			j--;
			k--;
		}
	}
	// 第二个数组有剩余直接插到第一个数组头部
	while (j >= 0) {
		nums1[k] = nums2[j];
		j--;
		k--;
	}
	return nums1;
}

console.log(MergeNums([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));