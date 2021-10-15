/*
 * Description:
 * Author:LinJ
 * Date:2021-10-15 14:32:34
 * LastEditors:LinJ
 * LastEditTime:2021-10-15 14:32:34
 */
/**
 * 将字符串中的 &、<、>、"（双引号）和 '（单引号）转换为相应的 HTML 字符实体。
 */
function convertHTML(str) {
	const map = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"'": "&apos;",
		'"': "&quot;",
	};
	return str.replace(/[&<>"']/g, (matched) => {
		return map[matched];
	});
}

convertHTML("Dolce & Gabbana") // Dolce &amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos") // Hamburgers &lt; Pizza &lt; Tacos
convertHTML("Sixty > twelve") // Sixty &gt; twelve
convertHTML('Stuff in "quotation marks"') // Stuff in &quot;quotation marks&quot;
convertHTML("Schindler's List") // Schindler&apos;s List
convertHTML("<>") // &lt;&gt;
convertHTML("abc") // abc。
