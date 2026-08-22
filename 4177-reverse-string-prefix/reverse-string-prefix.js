/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (s, k) {
    let result = swap(s.slice(0, k)) + s.slice(k, s.length);
    return result;
};

function swap(s) {
    let arr = s.split("");
    let n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[n - i - 1];
        arr[n - i - 1] = temp;
    }
    return arr.join("");
}