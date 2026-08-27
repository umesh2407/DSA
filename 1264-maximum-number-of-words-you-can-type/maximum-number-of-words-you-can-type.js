/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    let count = 0;
    let words = text.split(" ");
    let brokenSet = new Set();
    for (let i = 0; i < brokenLetters.length; i++) {
        if (!brokenSet.has(brokenLetters[i])) {
            brokenSet.add(brokenLetters[i]);
        }
    }
    for (let i = 0; i < words.length; i++) {
        let broken = false;
        for (let j = 0; j < words[i].length; j++) {
            if (brokenSet.has(words[i][j])) {
                broken = true;
            }
        }
        if (!broken) {
            count++;
        }
    }
    return count;
};