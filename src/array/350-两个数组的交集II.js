/**
 * @name 350.两个数组的交集II
 * @param {number[]} [nums1=[]]
 * @param {number[]} [nums2=[]]
 * @method 使用哈希表存储第一数组成员的次数，遍历第二数组成员，若哈希表存在成员记录则在指针位置上赋值成员，并将累减成员记录和累加指针
 * @return {number[]}
 */
function Intersect1(nums1 = [], nums2 = []) {
	if (!nums1.length || !nums2.length) return [];
	let p = 0;
	const map = {};
	// 先统计nums1生成map
	nums1.forEach(v => {
		if (map[v]) {
			map[v]++; // 再次出现累加1
		} else {
			map[v] = 1; // 首次出现记录1
		}
	});
	// 根据map移除nums2里的非交集
	nums2.forEach(v => {
		if (map[v]) { // 在哈希表中存在
			nums2[p] = v; // 在指针累加前操作
			map[v]--; // 匹配一个删除一个
			p++;
		}
	});
	return nums2.slice(0, p);
}

console.log(Intersect1([4, 9, 5], [9, 4, 9, 8, 4]));

// 已顺序排序：哈希表，双指针，原数组充当容器节省内存空间
function Intersect2(nums1 = [], nums2 = []) {
	if (!nums1.length || !nums2.length) return [];
	let p1 = 0;
	let p2 = 0;
	let p3 = 0;
	const _nums1 = nums1.sort((a, b) => a - b); // 假设数组已排序，如何优化
	const _nums2 = nums2.sort((a, b) => a - b); // 假设数组已排序，如何优化
	// 比较双指针的元素是否相等，相等则双指针累加1，不等则较小元素的指针累加1
	while (p1 < _nums1.length && p2 < _nums2.length) {
		if (_nums1[p1] < _nums2[p2]) {
			p1++;
		} else if (_nums1[p1] > _nums2[p2]) {
			p2++;
		} else {
			_nums1[p3] = _nums1[p1]; // 在指针累加前操作
			p1++;
			p2++;
			p3++;
		}
	}
	return _nums1.slice(0, p3);
}

console.log(Intersect2([1, 2, 2, 3, 6], [2, 2, 6]));