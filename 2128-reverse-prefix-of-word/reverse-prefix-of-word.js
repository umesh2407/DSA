/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let index;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            index = i;
            break;
        }
    }
    let rev = reverse(word, index);
    return rev;
};

function reverse(str, index) {
    let arr = str.split("");
    let n = index + 1;
    for (let i = 0; i < n / 2; i++) {
        let temp = arr[n - 1 - i];
        arr[n - 1 - i] = arr[i];
        arr[i] = temp;
    }
    return arr.join("");
}