/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let p = 0;
    let q = s.length - 1;
    while (p < q) {
        if (s[p] !== s[q]) {
            if (isPalindrome(s, p + 1, q)) {
                p = p + 2;
                q--;
            } else if (isPalindrome(s, p, q - 1)) {
                p++;
                q = q - 2;
            } else {
                return false;
            }
        } else {
            p++;
            q--;
        }
    }
    return true;
}

function isPalindrome(str, p, q) {
    while (p < q) {
        if (str[p] !== str[q]) {
            return false;
        }
        p++;
        q--;
    }
    return true;
}