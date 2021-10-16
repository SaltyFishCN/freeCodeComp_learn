/*
 * Description:
 * Author:LinJ
 * Date:2021-10-15 14:05:44
 * LastEditors:LinJ
 * LastEditTime:2021-10-15 14:25:15
 */
/**
 * 集合排序
 * 编写一个带有两个或更多数组的函数，并按原始提供的数组的顺序返回一个新的唯一值数组。
 * 换句话说，所有数组中出现的所有值都应按其原始顺序包括在内，但最终数组中不得重复。
 * 去重后的数字应按其出现在参数中的原始顺序排序，最终数组不应按数字大小进行排序。
 * 如有疑问，请先浏览下方的测试用例。
 */

/** 利用from以及flat将传入的数组进行合并铺平，再使用filter去重 */
function uniteUnique(arr) {
  // array.prototype.flat() 铺平数组
	return Array.from(arguments).flat().filter((item, i, arr) => arr.indexOf(item) === i);
}
/** 另一种解法
 * [].slice.call(arguments) 参数转为数组
 * 对上述数组进行逐个处理，需要用到每一次处理的结果所以使用reduce
 * 在当前数组中筛选出之前没有的数据连接到prev中
 */

function uniteUnique(arr) {
  return [].slice.call(arguments).reduce((accumulator,currentValue)=>{
    accumulator.concat(currentValue.fliter(item=>accumulator.indexOf(item)===-1))
  },[])
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) // [1, 3, 2, 5, 4]
uniteUnique([1, 2, 3], [5, 2, 1]) // [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) // [1, 2, 3, 5, 4, 6, 7, 8]
