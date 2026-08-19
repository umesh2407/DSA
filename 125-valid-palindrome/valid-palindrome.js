/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let p = 0;
    let q = s.length - 1;
    while (p < q) {
        if (!s[p].match(/[a-z0-9]/i)) {
            p++;
        } else if (!s[q].match(/[a-z0-9]/i)) {
            q--;
        } else if (s[p] === s[q]) {
            p++;
            q--;
        } else {
            return false;
        }
    }

    return true;
};