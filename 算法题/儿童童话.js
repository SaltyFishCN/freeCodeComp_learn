/*
 * Description:
 * Author:LinJ
 * Date:2021-10-13 23:28:16
 * LastEditors:LinJ
 * LastEditTime:2021-10-13 23:40:19
 */
/**
 * 儿童黑话也叫 Pig Latin，是一种英语语言游戏。 规则如下：
 * 如果单词以辅音开头，就把第一个辅音字母或第一组辅音簇移到单词的结尾，并在后面加上 ay。
 * 如果单词以元音开头，只需要在结尾加上 way。
 */
 function translatePigLatin(str) {
  if(str.search(/[aeiou]/) === -1){
    // 没有元音的情况
    return `${str}ay`
  }
  // 通常情况下有元音
  
  // (\w*?) 非贪婪捕获，只捕获到元音前
  // (\w*) 贪婪捕获，匹配元音之后的所有字母
  return str.replace(/(\w*?)([aeiou])(\w*)/,(_,$1,$2,$3)=>{
    return `${$2 + $3 + ($1||'w')}ay`
  });
}

console.log(translatePigLatin("rhythm"));