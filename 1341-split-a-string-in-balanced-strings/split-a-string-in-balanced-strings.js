/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let balanced = 0;
    let countR = 0;
    let countL = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'R') {
            countR++;
        } else {
            countL++;
        }
        if (countL == countR && countL > 0 && countR > 0) {
            balanced++;
            countL = 0;
            countR = 0;
        }

    }
    return balanced;
};