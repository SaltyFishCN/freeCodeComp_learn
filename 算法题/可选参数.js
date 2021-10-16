/*
 * Description:
 * Author:LinJ
 * Date:2021-10-16 13:54:07
 * LastEditors:LinJ
 * LastEditTime:2021-10-16 15:32:22
 */
/**
 * 创建一个将两个参数相加的函数。 如果只提供了一个参数，则返回一个需要一个参数并返回总和的函数。
 * 比如，addTogether(2, 3) 应该返回 5。 而 addTogether(2) 应该返回一个函数。
 * 调用这个返回的函数，为它传入一个值，会返回两个值的总和：
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) 应返回 5。
 * 如果任一参数不是有效数字，则返回 undefined。
 */

function addTogether() {
	let args = [].slice.call(arguments);
	function isNum(param) {
		return typeof param === "number" && !isNaN(param) && !isFinite();
	}
	// 检测合法性
	if (!isNum(args[0]) || (args.length === 2 && !isNum(args[1]))) {
		return;
	}
	if (args.length === 2) {
		// 直接返回两数和
		return args[0] + args[1];
	}
	// 只有一个参数则返回一个函数
	return function (next) {
		if (isNum(next)) {
			return args[0] + next;
		}
	};
}

addTogether(2, 3) // 5
addTogether(23, 30) // 53
addTogether(5)(7) // 12
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // undefined
addTogether(2, "3") // undefined
addTogether(2)([3]) // undefined。