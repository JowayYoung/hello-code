// 给定一个非空字符串s，最多删除一个字符。判断是否能成为回文字符串

function VaildPalindrome(str = "") {
	// 判断字符串是否回文
	function isPalindrome(st, ed) {
		while (st < ed) {
			if (str[st] !== str[ed]) {
				return false;
			}
			st++;
			ed--;
		}
		return true;
	}
	// 定义左右指针
	const max = str.length;
	let i = 0;
	let j = max - 1;
	// 左右字符相等，一起往中间移动
	while (i < j && str[i] === str[j]) {
		i++;
		j--;
	}
	// 尝试判断跳过左指针元素后字符是否回文
	if (isPalindrome(i + 1, j)) {
		return true;
	}
	// 尝试判断跳过右指针元素后字符串是否回文
	if (isPalindrome(i, j - 1)) {
		return true;
	}
	// 默认返回 false
	return false;
}

console.log(VaildPalindrome("aacbb"));
console.log(VaildPalindrome("accca"));

// 设计一个支持以下两种操作的数据结构：
// void addWord(word)
// bool search(word)
// search(word)可以搜索文字或正则表达式字符串，字符串只包含字母.或a-z
// .可以表示任何一个字母
// 你可以假设所有单词都是由小写字母 a-z 组成的

function WordDictionary() {
	this.words = {};
};
WordDictionary.prototype.add = function(word) {
	const max = word.length;
	if (this.words[max]) {
		this.words[max].push(word);
	} else {
		this.words[max] = [word];
	}
};
WordDictionary.prototype.search = function(word) {
	const max = word.length;
	if (!this.words[max]) {
		return false;
	}
	if (!word.includes(".")) {
		return this.words[max].includes(word);
	}
	const reg = new RegExp(word);
	return this.words[max].some((item) => {
		return reg.test(item);
	});
};

const word = new WordDictionary();
word.add("aaa");
word.add("bbb");
console.log(word.search("a.a"));
console.log(word.search("ccc"));

// 实现字符串转换数字

function ToNumber(str) {
	const reg = /\s*([-\+]?[0-9]*).*/;
	const groups = str.match(reg);
	const max = Math.pow(2, 31) - 1;
	const min = -max - 1;
	let target = 0;
	if (groups) {
		target = +groups[1];
		if (isNaN(target)) {
			target = 0;
		}
	}
	if (target > max) {
		return max;
	} else if (target < min) {
		return min;
	}
	return target;
};

console.log(ToNumber("123"));
console.log(ToNumber("xx123"));
console.log(ToNumber("-123RR"));