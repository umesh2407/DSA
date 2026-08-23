/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let p = 0;
    let q = 0;
    let result = "";
    while (p < word1.length || q < word2.length) {
        if (p < word1.length) {
            result = result + word1[p];
            p++
        }
        if (q < word2.length) {
            result = result + word2[q];
            q++
        }
    }

    return result;
};