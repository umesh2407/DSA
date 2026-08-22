/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function (num) {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    for (let i = 0; i < num.length; i++) {
        if (i % 2 === 0) {
            sumOfEven += Number(num[i]);
        } else {
            sumOfOdd += Number(num[i]);
        }

    }
    return sumOfEven === sumOfOdd;
};