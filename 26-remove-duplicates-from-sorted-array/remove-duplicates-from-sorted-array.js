/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let p = 0;
    let q = 1;
    while (q < nums.length) {
        if (nums[p] < nums[q]) {
            nums[p + 1] = nums[q];
            p++;
            q++;
        } else {
            q++;
        }
    }
    return p + 1;
};