function ListNode(val = null) {
	this.val = val;
	this.next = null;
}

// 给定一个链表，删除链表的倒数第n个结点，并且返回链表的头结点
function RemoveLastNthNode(list = {}, n = 0) {
	// 定义Dummy节点
	const dummy = new ListNode();
	dummy.next = list;
	// 定义快慢指针
	let fast = dummy;
	let slow = dummy;
	// 快指针先移动N步
	while (n > 0) {
		fast = fast.next;
		n--;
	}
	// 快慢指针同时移动
	while (fast.next) {
		fast = fast.next;
		slow = slow.next;
	}
	// 快指针走到尽头，慢指针就指向需要删除的结点
	slow.next = slow.next.next;
	return dummy.next;
}

// 定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点