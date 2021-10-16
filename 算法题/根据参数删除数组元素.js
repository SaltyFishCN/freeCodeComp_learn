/*
 * Description:
 * Author:LinJ
 * Date:2021-10-16 12:03:11
 * LastEditors:LinJ
 * LastEditTime:2021-10-16 12:03:11
 */
/**
 * 给定数组 arr，从数组的第一个元素开始，用函数 func 来检查数组的每个元素是否返回 true。 如果返回 false，就把这个元素删除。 
 * 持续执行删除操作，直到某个元素传入 func 时返回 true 为止。
 * 然后在条件满足后返回数组的其余部分，否则， arr 应作为空数组返回。
 */

 function dropElements(arr, func) {
  for(let i = 0;i<arr.length;i++) {
    if(func(arr[i])){
      return arr.slice(i)
    }
  }
  return []
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3;})// [3, 4]
dropElements([0, 1, 0, 1], function(n) {return n === 1;})// [1, 0, 1]
dropElements([1, 2, 3], function(n) {return n > 0;})// [1, 2, 3]
dropElements([1, 2, 3, 4], function(n) {return n > 5;})// []
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})// [7, 4]
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})// [3, 9, 2]。