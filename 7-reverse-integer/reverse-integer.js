/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let Min = Math.pow(-2, 31)
    let Max = Math.pow(2, 31) - 1;
    let rev = 0;
    let negative = false;
    if (x < 0) {
        negative = true;
    }
    x = Math.abs(x);
    while (x !== 0) {
        let rem = x % 10;
        rev = rev * 10 + rem;
        x = Math.floor(x / 10);
    }
    rev = negative ? -(rev) : (rev)
    return rev < Min || rev > Max ? 0 : rev;
};