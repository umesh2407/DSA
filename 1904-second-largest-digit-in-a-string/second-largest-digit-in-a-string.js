/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    let firstLargest = -1;
    let secondLargest = -1
    for (let i = 0; i < s.length; i++) {
        //checking unicode between 0 and 9 
        if (s[i] >= '0' && s[i] <= '9') {
            let digit = Number(s[i]);
            if (digit > firstLargest) {
                secondLargest = firstLargest;
                firstLargest = digit;
            } else if (digit < firstLargest && digit > secondLargest) {
                secondLargest = digit;
            }
        }
    }

    return secondLargest;
};