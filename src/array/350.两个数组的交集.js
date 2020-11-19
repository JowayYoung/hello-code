/**
 * @name 350.两个数组的交集
 * @param {number[]} [nums1=[]]
 * @param {number[]} [nums2=[]]
 * @method 哈希表 双指针
 * @return {number[]}
 */
function Intersect1(nums1 = [], nums2 = []) {
	if (!nums1.length || !nums2.length) return [];
	const map = {};
	const res = [];
	nums1.forEach(v => {
		if (map[v]) {
			map[v]++; // 再次出现累加1
		} else {
			map[v] = 1; // 首次出现记录1
		}
	});
	nums2.forEach(v => {
		if (map[v]) { // 在哈希表中存在
			res.push(v);
			map[v]--;
		}
	});
	return res;
}

function Intersect2(nums1 = [], nums2 = []) {
	if (!nums1.length || !nums2.length) return [];
	const _nums1 = nums1.sort((a, b) => a - b); // 假设数组已排序，如何优化
	const _nums2 = nums2.sort((a, b) => a - b); // 假设数组已排序，如何优化
	const res = [];
	let p1 = 0;
	let p2 = 0;
	while (p1 < _nums1.length && p2 < _nums2.length) {
		if (_nums1[p1] < _nums2[p2]) {
			p1++;
		} else if (_nums1[p1] > _nums2[p2]) {
			p2++;
		} else {
			res.push(_nums1[p1]);
			p1++;
			p2++;
		}
	}
	return res;
}

console.log("No.350 →", Intersect1([1, 2, 2, 1], [2, 2]));
console.log("No.350 →", Intersect2([1, 2, 2, 1], [2, 2]));