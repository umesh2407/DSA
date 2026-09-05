/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [[]];
    for (let num of nums) {
        let subSets = [];
        for (let x of result) {
            subSets.push([...x, num]);
        }
        result.push(...subSets);
    }

    return result;
};