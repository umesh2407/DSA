/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    let w1 = "";
    let w2 = "";
    for (let i = 0; i < word1.length; i++) {
        w1 = w1 + word1[i];
    }
    for (let j = 0; j < word2.length; j++) {
        w2 = w2 + word2[j];
    }
    return w1 === w2;
};