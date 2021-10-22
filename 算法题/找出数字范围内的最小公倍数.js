/*
 * Description:
 * Author:LinJ
 * Date:2021-10-15 16:25:34
 * LastEditors:LinJ
 * LastEditTime:2021-10-23 00:33:29
 */
/**
 * 找到给定参数的最小公倍数，可以被这两个参数整除，也可以被指定范围内的所以整数整除。
 * 注意，较小数不一定总是出现在数组的第一个元素。
 *
 * 两个整数的最小公倍数与最大公因数之间有如下的关系:
 * gcd 最大公因数
 * lcm 最小公倍数
 * lcm(a,b) = |a * b| / gcd(a,b)
 */
function smallestCommons(arr) {
  let small = Math.min(...arr),
      large = Math.max(...arr);
  let result = 1;
  // 获取最大公因数
  // 辗转相除法：两个整数的最大公约数等于其中较小的数和两数相除余数的最大公约数
  // 反复进行大小相除，知道余数为0
  function getGCD(sm, lg) {
    [sm,lg] = sm > lg ? [lg,sm]:[sm,lg];
    while (sm !== 0)  [sm, lg] = [lg % sm, sm];
    return lg;
  }

  // 获取两数的最小公倍数
  const getLCM = (a,b) =>Math.abs(a*b)/getGCD(a,b)

  while(small <= large){
    result = getLCM(result,small)
    small++
  }
  return result;
}

smallestCommons([1, 5]) // 60
smallestCommons([5, 1]) // 60
smallestCommons([2, 10]) // 2520
smallestCommons([1, 13]) // 360360
smallestCommons([23, 18]) // 6056820。
