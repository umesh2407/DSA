/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length;
    let partialSum = 0;
    let totalSum = n * ((n + 1) / 2);
    for (let i = 0; i < nums.length; i++) {
        partialSum += nums[i];
    }
    return totalSum - partialSum;
};