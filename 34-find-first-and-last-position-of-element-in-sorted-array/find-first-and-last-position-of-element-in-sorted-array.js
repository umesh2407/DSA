/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;

    // Find first occurrence
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] === target) {
            first = m;
            r = m - 1; // keep searching left
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    // Find last occurrence
    l = 0;
    r = nums.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] === target) {
            last = m;
            l = m + 1; // keep searching right
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return [first, last];
};