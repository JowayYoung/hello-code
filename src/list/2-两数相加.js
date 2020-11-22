/**
 * @name 2.两数相加
 * @param {object} [list1=null]
 * @param {object} [list2=null]
 * @return {object}
 * @method 初始哨兵节点和单指针，使用新链表保存两个链表同位相加的结果(每次相加得加上进位)并记录进位
 * @summary 哨兵节点，进位
 */
function AddTwoNumbers(list1 = {}, list2 = {}) {
	if (!list1 || !list2 || !list1.next || !list2.next) return null;
	const head = new ListNode(0);
	let cur = head;
	let tmp = 0;
	while (list1 || list2 || tmp) {
		if (list1) {
			tmp += list1.val;
			list1 = list1.next;
		}
		if (list2) {
			tmp += list2.val;
			list2 = list2.next;
		}
		cur.next = new ListNode(tmp % 10);
		tmp = tmp > 9 ? 1 : 0;
		cur = cur.next; // 指针串联节点
	}
	return head.next;
}

function ListNode(val = null) {
	this.val = val;
	this.next = null;
}

const list1 = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
const list2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };
console.log(JSON.stringify(AddTwoNumbers(list1, list2), null, 4));