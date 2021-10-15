/*
 * Description:
 * Author:LinJ
 * Date:2021-10-15 15:41:49
 * LastEditors:LinJ
 * LastEditTime:2021-10-15 15:51:28
 */
/**
 * 质数求和
 * 质数（prime number）是大于 1 且仅可以被 1 和自己整除的数。 比如，2 就是一个质数，因为它只可以被 1 和 2（它本身）整除。
 * 相反，4 不是质数，因为它可以被 1, 2 和 4 整除。
 *
 * 假如一个数N是合数，它有一个约数a,a×b=N
 * 则a、b两个数中必有一个大于或等于根号N，一个小于或等于根号N。
 * 因此，只要小于或等于根号N的数（1除外）不能整除N，则N一定是素数。
 */

function sumPrimes(num) {
	function isPrime(x) {
		if (x < 2) return false;
		for (let i = 2; i ** 2 <= x; i++) {
			// 能被整除则不是质数
			if (x % i === 0) {
				return false;
			}
		}
		return true;
	}
	let sum = 0;
	for (let i = 2; i <= num; i++) {
		if (isPrime(i)) {
			sum += i;
		}
	}
	return sum;
}

sumPrimes(10) // 17
sumPrimes(977) // 73156
