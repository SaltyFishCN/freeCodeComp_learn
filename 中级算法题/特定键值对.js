/*
 * Description:创建一个查看对象数组（第一个参数）的函数，并返回具有匹配的名称和值对的所有对象的数组。 
 *            如果要包含在返回的数组中，则源对象的每个名称和值对都必须存在于集合中的对象中
 * Author:LinJ
 * Date:2021-10-13 12:20:05
 * LastEditors:LinJ
 * LastEditTime:2021-10-15 11:18:35
 */
function whatIsInAName(collection, source) {

  return collection.filter(item=>{
    // Object.keys(source).every(fn) 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值
    // 该布尔值刚好提供给filter作为过滤标准
    return Object.keys(source).every(key=>item[key] === source[key])
  })
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });