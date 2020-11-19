/**
 * @name 66.加一
 * @param {number[]} [nums=[]]
 * @return {number[]}
 */
function PlusOne(nums = []) {
	if (!nums.length) return [];
	const last = nums.length - 1;
	let bit = 0;
	return nums.reduceRight((t, v, i) => {
		if (i === 0) {
			const digit = v + bit;
			digit > 9 ? t.unshift(1, digit % 10) : t.unshift(digit);
		} else {
			const digit = last === i ? v + 1 : v + bit;
			bit === 1 && bit--;
			if (digit > 9) {
				bit++;
				t.unshift(digit % 10);
			} else {
				t.unshift(digit);
			}
		}
		return t;
	}, []);
}

console.log(PlusOne([1, 2, 3]));