/*
 * Description:
 * Author:LinJ
 * Date:2021-10-15 13:59:47
 * LastEditors:LinJ
 * LastEditTime:2021-10-23 00:26:57
 */
/**
 * 寻找缺失的字母
 * 在这道题目中，我们需要写一个函数，找出传入的字符串里缺失的字母并// 它。
 * 如果所有字母都在传入的字符串范围内，返回 undefined。
 */

 function fearNotLetter(str) {
  const start = str.charCodeAt(0)
  const end = str.charCodeAt(str.length - 1);
  // 利用Array.from()生成完整的字母序列
  let charArr = Array.from({length:end-start + 1},(_,step)=>String.fromCharCode(start + step));
  // 过滤
  return charArr.filter(item=>!str.includes(item))[0]
}

fearNotLetter("abce") // 字符串 'd'
fearNotLetter("abcdefghjklmno") //  'i'
fearNotLetter("stvwx") // 字符串 'u'
fearNotLetter("bcdf") // 字符串 'e'
fearNotLetter("abcdefghijklmnopqrstuvwxyz") // undefined