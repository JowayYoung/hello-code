/**
 * @name 141.环形链表
 * @param {object} [list=null]
 * @return {boolean}
 * @method 初始快指针和慢指针，慢指针每次走一步，快指针每次走两步，若相遇则表示链表存在闭环
 * @summary 双指针(快慢指针相遇)
 */
function HasCycle(list = null) {
	if (!list || !list.next) return false;
	let slow = list;
	let fast = list.next;
	while (slow?.val !== fast?.val) {
		if (!fast || !fast.next) return false;
		slow = slow.next; // 慢指针每次走一步
		fast = fast.next.next; // 快指针每次走两步
	}
	return true;
}

const cycle = { next: null, val: 6 };
const list = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: cycle } } } } };
cycle.next = list;
console.log(HasCycle(list));