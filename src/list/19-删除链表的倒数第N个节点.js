/**
 * @name 19.删除链表的倒数第N个节点
 * @param {object} [list=null]
 * @param {number} [n=0]
 * @return {object}
 * @method 初始哨兵节点、cur指针(指向哨兵节点)、pre指针(指向null)和索引，遍历链表，若索引大于n-1则同时移动cur和pre，若遍历遇到null则cur指向待删除节点
 * @summary 哨兵节点 双指针 索引(递增遍历链表)
 */
function RemoveNthFromEnd(list = null, n = 0) {
	if (!list || !list.next || n < 2) return null;
	const head = new ListNode();
	head.next = list;
	let cur = head;
	let pre = null;
	let i = 1;
	while (list) {
		if (i > n - 1) {
			pre = cur;
			cur = cur.next;
		}
		list = list.next;
		i++;
	}
	pre.next = pre.next.next;
	return head.next;
}

function ListNode(val = null) {
	this.val = val;
	this.next = null;
}

const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
console.log(JSON.stringify(RemoveNthFromEnd(list, 2), null, 4));