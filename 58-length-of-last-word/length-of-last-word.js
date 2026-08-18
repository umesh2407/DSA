/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();
    s = s.split(" ");
    let n = s.length - 1;
    return (s[n].length);
};
