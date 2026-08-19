/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let charMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (charMap.has(s[i])) {
            charMap.set(s[i], (charMap.get(s[i])) + 1);
        } else {
            charMap.set(s[i], 1);
        }
    }

    let maxVowel = 0;
    let maxConsonant = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            if (charMap.get(s[i]) > maxVowel) {
                maxVowel = charMap.get(s[i]);
            }
        } else {
            if (charMap.get(s[i]) > maxConsonant) {
                maxConsonant = charMap.get(s[i]);
            }
        }
    }
    return maxVowel + maxConsonant;
};