/*
 * Description:
 * Author:LinJ
 * Date:2021-10-15 13:13:40
 * LastEditors:LinJ
 * LastEditTime:2021-10-15 13:13:40
 */
function pairElement(str) {
  // 映射表
  const mapform = {
    "A":"T",
    "T":"A",
    "C":"G",
    "G":"C"
  }
  return str.split('').map(item=>[item,mapform[item]]);
}

pairElement("ATCGA") // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG") // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA") // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]。