/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let ans = [];
    let hashSet = {};
    for (let i = 0; i < names.length; i++) {
        hashSet[heights[i]] = names[i];
    }
    heights.sort((a, b) => b - a);
    for (let i = 0; i < heights.length; i++) {
        ans.push(hashSet[heights[i]]);
    }

    return ans;
};