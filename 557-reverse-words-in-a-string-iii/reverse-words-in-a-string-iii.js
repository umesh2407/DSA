/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let result = "";
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        result += reverse(arr[i]) + " ";
    }
    return result.trim();
};

function reverse(s) {
    let arr = s.split("");
    let n = arr.length;
    for (let i = 0; i < n / 2; i++) {
        let temp = arr[n - i - 1];
        arr[n - i - 1] = arr[i];
        arr[i] = temp;
    }
    return arr.join("");
}