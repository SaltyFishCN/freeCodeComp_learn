/*
 * Description:
 * Author:LinJ
 * Date:2021-10-16 15:52:04
 * LastEditors:LinJ
 * LastEditTime:2021-10-16 15:52:05
 */
/**
 * 用以下方法填充对象构造函数：
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 * 运行测试以查看每个方法的预期输出。 方法接收一个参数，因此必须要有一个参数，并且其类型应该为字符串。
 * 这些方法必须是与对象交互的唯一可用方法。
 */

/** 闭包！！ */
var Person = function (firstAndLast) {
	this.getFullName = function () {
		return firstAndLast;
	};
	this.getFirstName = function () {
		return firstAndLast.split(" ")[0];
	};
	this.getLastName = function () {
		return firstAndLast.split(" ")[1];
	};
	this.setFirstName = function (first) {
		firstAndLast = firstAndLast.replace(/\w+(?=\s)/, first);
	};
	this.setLastName = function (last) {
		firstAndLast = firstAndLast.replace(/\w+$/, last);
	};
	this.setFullName = function (nfirstAndLast) {
		firstAndLast = nfirstAndLast;
	};
	return firstAndLast;
};

var bob = new Person("Bob Ross");
console.log(bob.getFullName());
