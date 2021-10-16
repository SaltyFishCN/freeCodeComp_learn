/*
 * Description:将字符串转换为短线连接格式。 短线连接格式是小写单词全部小写并以破折号分隔。
 * Author:LinJ
 * Date:2021-10-13 13:09:27
 * LastEditors:LinJ
 * LastEditTime:2021-10-13 13:12:39
 */
function spinalCase(str) {
  // (?=[A-Z]) 先行断言，在这里其实是匹配大写A-Z的前侧
  return str.trim().split(/\s|_|-|(?=[A-Z])/).join('-').toLowerCase();
}

spinalCase("This Is Spinal Tap") // expected output: this-is-spinal-tap
spinalCase("thisIsSpinalTap") // expected output: this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show") // expected output: the-andy-griffith-show
spinalCase("Teletubbies say Eh-oh") // expected output: teletubbies-say-eh-oh
spinalCase("AllThe-small Things") // expected output: all-the-small-things。