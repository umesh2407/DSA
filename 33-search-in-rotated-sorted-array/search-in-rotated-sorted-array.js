/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let p = 0;
    let q = 1;
    while (nums[p] < nums[q]) {
        p++;
        q++;
    }
    if (target < nums[0]) {
        p++;
        q = nums.length - 1;
    } else {
        p = 0;
    }
    // Binary search
    while (p <= q) {
        let m = p + Math.floor((q - p) / 2);
        if (nums[m] === target) {
            return m;
        } else if (target > nums[m]) {
            p = m + 1;
        } else {
            q = m - 1;
        }
    }
    return -1;

};