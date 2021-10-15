/*
 * Description:
 * Author:LinJ
 * Date:2021-10-15 12:25:02
 * LastEditors:LinJ
 * LastEditTime:2021-10-15 12:54:13
 */
/**
 * 在这道题目中，我们需要写一个字符串的搜索与替换函数，它的返回值为完成替换后的新字符串。
 * 这个函数接收的第一个参数为待替换的句子。
 * 第二个参数为句中需要被替换的单词。
 * 第三个参数为替换后的单词。
 * 注意： 在更换原始单词时保留原始单词中第一个字符的大小写。 
 * 即如果传入的第二个参数为 Book，第三个参数为 dog，那么替换后的结果应为 Dog
 */

function myReplace(str, before, after) {
  return str.replace(RegExp(before),function(matched) {
            if(/^[A-Z]/.test(matched)){
              // 首字母大写
              return after[0].toUpperCase() + after.slice(1);
            }
            //  首字母没有大写
            return after[0].toLowerCase() + after.slice(1);
          })
}

myReplace("Let us go to the store", "store", "mall") // Let us go to the mall。
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") // He is Sitting on the couch。
myReplace("I think we should look up there", "up", "Down") // I think we should look down there。
myReplace("This has a spellngi error", "spellngi", "spelling") // This has a spelling error。
myReplace("His name is Tom", "Tom", "john") // His name is John。
myReplace("Let us get back to more Coding", "Coding", "algorithms") // Let us get back to more Algorithms。