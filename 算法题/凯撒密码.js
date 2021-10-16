/*
 * Description:
 * Author:LinJ
 * Date:2021-10-16 21:43:54
 * LastEditors:LinJ
 * LastEditTime:2021-10-16 22:56:07
 */
/**
 * 凯撒密码（ Caesar cipher）是最简单且最广为人知的密码（ciphers），也被称为移位密码（shift cipher）。 在移位密码中，明文中的字母通过按照一个固定数目进行偏移后被替换成新的字母。
 * ROT13 是一个被广泛使用的加密技术，明文中的所有字母都被移动 13 位。 也就是， A ↔ N，B ↔ O 等等。
 * 编写一个函数，它将 ROT13 编码的字符串作为输入并返回解码字符串。
 * 所有解码后的字母都必须为字母大写。 请不要解码非字母的字符（例如，空格、标点符号），但你需要在结果中保留它们。
 */
//  65 % 26 刚好为13，也就是我们需要的偏移量
// 如果需要的移动量为14，则需要将起始值设为 66,66%26=14
function rot13(str) {
	// 65-90 A-Z
	return str.replace(/[A-Z]/g, (match) => {
			return String.fromCharCode(65 + (match.charCodeAt() % 26));
  });
}

rot13("SERR PBQR PNZC") // FREE CODE CAMP
rot13("SERR CVMMN!") // FREE PIZZA!
rot13("SERR YBIR?") // FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
