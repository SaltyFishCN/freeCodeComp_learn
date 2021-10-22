/*
 * Description:
 * Author:LinJ
 * Date:2021-10-15 14:34:10
 * LastEditors:LinJ
 * LastEditTime:2021-10-22 13:58:22
 */
/**
 * 求斐波那契数列中的奇数之和
 * 在这道题目中，我们需要写一个函数，参数为一个正整数 num，返回值为斐波那契数列中，小于或等于 num 的奇数之和。
 * 斐波那契数列中，第一和第二个数字都是 1。 后面的每个数字由之前两数相加得出。 
 * 斐波那契数列的前六个数字分别为：1、1、2、3、5、8。
 * 比如，sumFibs(10) 应该返回 10。 因为斐波那契数列中，比 10 小的数字只有 1、1、3、5。
 */

function sumFibs(num) {
  // fibArr = [1, 1] current起始值设为2
  let fibsArr = [1, 1]
  let current = 2;
  // 先求出斐波那契数列
  while(current <= num){
    fibsArr.push(current);
    // 截取最后两个数
    let lastTwo = fibsArr.slice(-2);
    current = lastTwo[0] + lastTwo[1];
  }
  // 再使用reduce进行求和操作
  return fibsArr.reduce((sum,next)=>{
    if(next % 2 !== 0) {
      return sum + next;
    }
    return sum
  },0)
}

sumFibs(1000) // 1785
sumFibs(4000000) // 4613732
sumFibs(4) // 5
sumFibs(75024) // 60696
sumFibs(75025) // 135721