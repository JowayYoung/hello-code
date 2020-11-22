/**
 * @name 21.合并两个有序链表
 * @param {object} [list1=null]
 * @param {object} [list2=null]
 * @return {object}
 * @method 初始一个指针来回穿梭两个链表，串联较小节点，指针向后移动，直至其中一个链表串完再串剩下链表的节点
 * @summary 哨兵节点 单指针
 */
function MergeTwoLists(list1 = null, list2 = null) {
	if (!list1 || !list2 || !list1.next || !list2.next) return null;
	const head = new ListNode();
	let cur = head;
	// 指针在两个链表中来回穿梭，串联较小节点，指针向后移动
	while (list1 && list2) {
		if (list1.val <= list2.val) {
			cur.next = list1;
			list1 = list1.next;
		} else {
			cur.next = list2;
			list2 = list2.next;
		}
		cur = cur.next; // 指针串联一个节点并向后移动
	}
	if (list1 !== null) {
		cur.next = list1;
	}
	if (list2 !== null) {
		cur.next = list2;
	}
	return head.next;
}

function ListNode(val = null) {
	this.val = val;
	this.next = null;
}

const list1 = { val: 1, next: { val: 3, next: { val: 5, next: null } } };
const list2 = { val: 2, next: { val: 4, next: { val: 6, next: { val: 7, next: null } } } };
console.log(JSON.stringify(MergeTwoLists(list1, list2), null, 4));