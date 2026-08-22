/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {

    if (sentence.length < 26) return false;

    let charArr = Array(26).fill(0);

    for (let i = 0; i < sentence.length; i++) {
        let index = sentence[i].charCodeAt() - 97;
        charArr[index]++;
    }

    for (let i = 0; i < 26; i++) {
        if (charArr[i] === 0) {
            return false;
        }
    }

    return true;
};