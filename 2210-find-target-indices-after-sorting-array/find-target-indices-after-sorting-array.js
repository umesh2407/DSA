/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    nums.sort((a, b) => a - b);

    let l = 0;
    let r = nums.length - 1;

    // Find first occurrence
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] >= target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    let first = l;

    // Target doesn't exist
    if (first >= nums.length || nums[first] !== target) {
        return [];
    }

    // Find last occurrence
    l = first;
    r = nums.length - 1;

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] <= target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    let last = r;

    let result = [];

    for (let i = first; i <= last; i++) {
        result.push(i);
    }

    return result;
};