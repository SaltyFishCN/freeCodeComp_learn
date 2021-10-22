/*
 * Description:
 * Author:LinJ
 * Date:2021-10-16 20:55:33
 * LastEditors:LinJ
 * LastEditTime:2021-10-23 00:06:49
 */
/**
 * 把传入的数字转为罗马数字。
 * 转换后的罗马数字字母必须都是大写
 * https://www.mathsisfun.com/roman-numerals.html
 */
/**
 * 从高位开始处理，一步步减少。
 * 其中逢1 4 5 9 比较特殊所以映射表中单独列出
 */
function convertToRoman(num) {
	const num_roman_map = [
		[1, "I"],
		[4, "IV"],
		[5, "V"],
		[9, "IX"],
		[10, "X"],
		[40, "XL"],
		[50, "L"],
		[90, "XC"],
		[100, "C"],
		[400, "CD"],
		[500, "D"],
		[900, "CM"],
		[1000, "M"],
	];
	const map_length = num_roman_map.length;
	let result = "";

	if (num <= 0) return;
	for (let i = map_length - 1; i >= 0; ) {
		if (num >= num_roman_map[i][0]) {
			result += num_roman_map[i][1];
			num -= num_roman_map[i][0];
		} else {
			i--;
		}
	}
	return result;
}
convertToRoman(2) // II。
convertToRoman(3) // III。
convertToRoman(4) // IV。
convertToRoman(5) // V。
convertToRoman(9) // IX。
convertToRoman(12) // XII。
convertToRoman(16) // XVI。
convertToRoman(29) // XXIX。
convertToRoman(44) // XLIV.
convertToRoman(45) // XLV。
convertToRoman(68) // LXVIII
convertToRoman(83) // LXXXIII
convertToRoman(97) // XCVII
convertToRoman(99) // XCIX
convertToRoman(400) // CD
convertToRoman(500) // D
convertToRoman(501) // DI
convertToRoman(649) // DCXLIX
convertToRoman(798) // DCCXCVIII
convertToRoman(891) // DCCCXCI
convertToRoman(1000) // M
convertToRoman(1004) // MIV
convertToRoman(1006) // MVI
convertToRoman(1023) // MXXIII
convertToRoman(2014) // MMXIV
convertToRoman(3999) // MMMCMXCIX
