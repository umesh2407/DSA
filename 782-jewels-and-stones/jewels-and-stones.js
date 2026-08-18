/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let ans = 0;
    let jewelSet = new Set();
    for (let i = 0; i < jewels.length; i++) {
        if (!jewelSet.has(jewels[i])) {
            jewelSet.add(jewels[i]);
        }
    }

    for (let i = 0; i < stones.length; i++) {
        if (jewelSet.has(stones[i])) {
            ans++;
        }
    }

    return ans;
};