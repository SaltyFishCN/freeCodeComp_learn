/*
 * Description:比较两个数组并返回一个新数组，包含所有只在其中一个数组中出现的元素，排除两个数组都存在的元素
 * Author:LinJ
 * Date:2021-10-13 11:58:07
 * LastEditors:LinJ
 * LastEditTime:2021-10-23 00:21:26
 */

function diffArray(arr1, arr2) {
  return arr1.concat(arr2)  // [...arr1,...arr2]
  // 滤掉arr1与arr2中都存在的元素
  .filter(item => !(arr1.includes(item) && arr2.includes(item)))
  // 去重
  .filter((item,index,arr)=>arr.indexOf(item) === index)
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);