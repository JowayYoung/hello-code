function ListNode(val = null) {
	this.val = val;
	this.next = null;
}

// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的

function MergeList(list1, list2) {
	// 定义头指针
	const head = new ListNode();
	let cur = head;
	// 指针在两个链表中来回穿梭
	while (list1 && list2) {
		// list1的结点值较小
		if (list1.val <= list2.val) {
			// 先串起list1的结点，指针向后移动
			cur.next = list1;
			list1 = list1.next;
		} else {
			// list2较小时，串起list2的结点，指针向后移动
			cur.next = list2;
			list2 = list2.next;
		}
		// 指针在串起一个结点后向后移动
		cur = cur.next;
	}
	// 处理链表不等长的情况
	cur.next = list1 !== null ? list1 : list2;
	// 返回起始结点
	return head.next;
}

// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次

function RemoveSameNode(list) {
	// 设定头指针
	let cur = list;
	while (cur !== null && cur.next !== null) {
		// 若当前结点和它后面一个结点值相等
		if (cur.val === cur.next.val) {
			// 删除靠后的那个结点
			cur.next = cur.next.next;
		} else {
			// 若不重复，继续遍历
			cur = cur.next;
		}
	}
	return list;
};

// 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字

function RemoveAllSameNode(list) {
	// 极端情况：0个或1个结点，则不会重复，直接返回
	if (!list || !list.next) {
		return list;
	}
	// dummy登场
	let dummy = new ListNode();
	// dummy永远指向头结点
	dummy.next = list;
	// cur从dummy开始遍历
	let cur = dummy;
	// 当cur的后面有至少两个结点时
	while (cur.next && cur.next.next) {
		// 对cur后面的两个结点进行比较
		if (cur.next.val === cur.next.next.val) {
			// 若值重复，则记下这个值
			const val = cur.next.val;
			// 反复地排查后面的元素是否存在多次重复该值的情况
			while (cur.next && cur.next.val === val) {
				// 若有则删除
				cur.next = cur.next.next;
			}
		} else {
			// 若不重复，则正常遍历
			cur = cur.next;
		}
	}
	// 返回链表的起始结点
	return dummy.next;
};