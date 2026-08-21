/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        let isPrefix = true;

        for (let j = 0; j < pref.length; j++) {
            if (words[i][j] !== pref[j]) {
                isPrefix = false;
                break;
            }
        }

        if (isPrefix) {
            count++;
        }
    }

    return count;
};