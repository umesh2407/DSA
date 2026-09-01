/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    let freq = {};
    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]]) {
            freq[s[i]]++;
        } else {
            freq[s[i]] = 1;
        }
    }
    let check = freq[s[0]];
    for (let val in freq) {
        if (check !== freq[val]) {
            return false;
        }
    }
    return true;
};
