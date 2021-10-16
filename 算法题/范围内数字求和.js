/*
 * Description: 给出一个含有两个数字的数组，返回这两个数字间所有数字（包含这两个数字）的总和。最低的数字并不总是第一位。 
 * Author:LinJ
 * Date:2021-10-13 11:55:26
 * LastEditors:LinJ
 * LastEditTime:2021-10-13 11:56:57
 */
/**

 * */
function sumAll(arr) {
  const [prev,next] = [...arr]
  return (prev+next) * (Math.abs(prev-next) + 1)/2
}

sumAll([1, 4]) // expected output 10。
sumAll([4, 1]) // expected output 10。
sumAll([5, 10]) // expected output 45。
sumAll([10, 5]) // expected output 45。