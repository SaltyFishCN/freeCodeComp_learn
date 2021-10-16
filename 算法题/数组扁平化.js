/*
 * Description:
 * Author:LinJ
 * Date:2021-10-16 12:43:41
 * LastEditors:LinJ
 * LastEditTime:2021-10-16 12:45:34
 */
/**
 * 嵌套数组扁平化成一维数组。 必须考虑到各种深度的嵌套层级。
 * 不使用 Array.prototype.flat() 或 Array.prototype.flatMap() 方法。
 */
// 使用array.prototype.reduce实现递归
function steamrollArray(arr) {
	return arr.reduce((prev, cur) => {
		return prev.concat(Array.isArray(cur) ? steamrollArray(cur) : cur);
	}, []);
}

steamrollArray([[["a"]], [["b"]]]) // ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]) // [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]) // [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]) // [1, {}, 3, 4]