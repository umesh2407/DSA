/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let result = "";

    for (let i = s.length - 1; i >= 0; i--) {
        let num;

        if (s[i] === "#") {
            num = Number(s[i - 2] + s[i - 1]);
            i -= 2;
        } else {
            num = Number(s[i]);
        }

        result = String.fromCharCode(num + 96) + result;
    }

    return result;
};
