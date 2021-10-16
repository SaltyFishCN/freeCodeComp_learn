/*
 * Description:
 * Author:LinJ
 * Date:2021-10-16 15:53:24
 * LastEditors:LinJ
 * LastEditTime:2021-10-16 16:07:04
 */
/**
 * 在这道题目中，我们需要写一个计算天体轨道周期（单位是秒）的函数。
 * 它接收一个对象数组参数 arr，对象中包含表示天体名称的 name 属性，及表示天体表面平均海拔的 avgAlt 属性。 就像这样：{name: 'name', avgAlt: avgAlt}。
 * 你可以在这条维基百科的链接中找到轨道周期的计算公式：
 * https://zh.wikipedia.org/wiki/%E8%BD%A8%E9%81%93%E5%91%A8%E6%9C%9F
 * T = 2 * pi * (a**3/(GM))**1/2
 * 最终的计算结果应取整到最接近的整数。 
 * 地球半径为 6367.4447 公里，地球的 GM 值为 398600.4418 km 3 s -2 。
 */

 function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr.map(item=>{
    return {
      name: item.name,
      orbitalPeriod: 2 * Math.PI * ((earthRadius+item.avgAlt)**3/GM)**0.5
    }
  })
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(item=>{
    return {
      name: item.name,
      orbitalPeriod: Math.round(2 * Math.PI * ((earthRadius+item.avgAlt)**3/GM)**0.5)
    }
  })
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))