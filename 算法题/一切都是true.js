/*
 * Description:
 * Author:LinJ
 * Date:2021-10-16 13:10:46
 * LastEditors:LinJ
 * LastEditTime:2021-10-16 13:52:33
 */
/**
 * 检查谓词（第二个参数）在集合（第一个参数）的所有元素是否为 truthy。
 * 换句话说，你将获得一个对象的数组集合。
 * 如果数组中的每个对象里，pre 对应属性值均为 truthy，则返回 true。 否则，返回 false 。
 * JavaScript 中，如果一个值在 Boolean 的上下文中的执行结果为 true，那么我们称这个值是 truthy 的。
 * 别忘了，你可以使用点号表示法或方括号表示法（[]）来访问对象的属性。
 */

function truthCheck(collection, pre) {
	return collection.every((item) => {
		return item[pre];
	});
}

truthCheck(
	[
		{ user: "Tinky-Winky", sex: "male" },
		{ user: "Dipsy", sex: "male" },
		{ user: "Laa-Laa", sex: "female" },
		{ user: "Po", sex: "female" },
	],
	"sex"
); // true
truthCheck(
	[
		{ user: "Tinky-Winky", sex: "male" },
		{ user: "Dipsy" },
		{ user: "Laa-Laa", sex: "female" },
		{ user: "Po", sex: "female" },
	],
	"sex"
); // false
truthCheck(
	[
		{ user: "Tinky-Winky", sex: "male", age: 0 },
		{ user: "Dipsy", sex: "male", age: 3 },
		{ user: "Laa-Laa", sex: "female", age: 5 },
		{ user: "Po", sex: "female", age: 4 },
	],
	"age"
); // false
truthCheck(
	[
		{ name: "Pete", onBoat: true },
		{ name: "Repeat", onBoat: true },
		{ name: "FastForward", onBoat: null },
	],
	"onBoat"
); // false
truthCheck(
	[
		{ name: "Pete", onBoat: true },
		{ name: "Repeat", onBoat: true, alias: "Repete" },
		{ name: "FastForward", onBoat: true },
	],
	"onBoat"
); // true
truthCheck([{ single: "yes" }], "single"); // true
truthCheck([{ single: "" }, { single: "double" }], "single"); // false
truthCheck([{ single: "double" }, { single: undefined }], "single"); // false
truthCheck([{ single: "double" }, { single: NaN }], "single"); // false。
