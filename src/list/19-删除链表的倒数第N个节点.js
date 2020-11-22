/**
 * @name 19.删除链表的倒数第N个节点
 * @param {object} [head={}]
 * @param {number} [n=0]
 * @return {object}
 * @method 定义哨兵节点、cur指针(指向哨兵节点)、pre指针(指向null)和索引，遍历链表，若索引大于n-1则同时移动cur和pre，若遍历遇到null则cur指向待删除节点
 * @summary 哨兵节点 双指针 索引(递增遍历链表)
 */
function RemoveNthFromEnd(head = {}, n = 0) {
	if (!head) return null;
	if (!head.next && n < 2) return null;
	const prehead = new ListNode();
	prehead.next = head;
	let cur = prehead;
	let pre = null;
	let i = 1;
	while (head) {
		if (i > n - 1) {
			pre = cur;
			cur = cur.next;
		}
		head = head.next;
		i++;
	}
	pre.next = pre.next.next;
	return prehead.next;
}

function ListNode(val = null) {
	this.val = val;
	this.next = null;
}

const obj = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
console.log(JSON.stringify(RemoveNthFromEnd(obj, 2), null, 4));