/*
 * Description:将获得一个初始数组（destroyer 函数中的第一个参数），后跟一个或多个参数。 
 *             从初始数组中移除所有与后续参数相等的元素
 * Author:LinJ
 * Date:2021-10-13 12:17:42
 * LastEditors:LinJ
 * LastEditTime:2021-10-13 22:14:22
 */
function destroyer(arr,...args) {
  let temp = arr;
  args.forEach(arg=>{
    temp = temp.filter(item=>item !== arg)
  })
  return temp;
}

function destroyer(arr,...args) {
  return args.reduce((prev,next)=>{
      return prev.filter(item=>item !== next)
  },arr)
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3) // expected output [1, 1]。
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // expected output [1, 5, 1]。
destroyer([3, 5, 1, 2, 2], 2, 3, 5) // expected output [1]。
destroyer([2, 3, 2, 3], 2, 3) // expected output []。
destroyer(["tree", "hamburger", 53], "tree", 53) // expected output ["hamburger"]