/*
 * Description:
 * Author:LinJ
 * Date:2021-10-16 18:38:05
 * LastEditors:LinJ
 * LastEditTime:2021-10-16 20:55:21
 */
/**
 * 如果传入的字符串是回文字符串，则返回 true。 否则返回 false
 * 回文 palindrome，指在忽略标点符号、大小写和空格的前提下，正着读和反着读一模一样。
 * 注意：检查回文时，你需要先去除所有非字母数字的字符（标点、空格和符号），并将所有字母都转换成大写或都转换成小写。
 * 我们会传入具有不同格式的字符串，如 racecar、RaceCar 和 race CAR 等等。
 * 我们也会传入一些包含特殊符号的字符串，例如 2A3*3a2、2A3 3a2、2_A3*3#A2。
 */

 function palindrome(str) {
  let replace_str = str.replace(/[_\W]/g,'').toLowerCase();
  return ( replace_str === replace_str.split('').reverse().join(''))
 }

palindrome("eye") // true
palindrome("_eye") // true
palindrome("race car") // true
palindrome("not a palindrome") // false
palindrome("A man, a plan, a canal. Panama") // true
palindrome("never odd or even") // true
palindrome("nope") // false
palindrome("almostomla") // false
palindrome("My age is 0, 0 si ega ym.") // true
palindrome("1 eye for of 1 eye.") // false
palindrome("0_0 (: /-\ :) 0-0") // true
palindrome("five|\_/|four") // false。


 