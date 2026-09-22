/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return sort(left, right);
};

//merge 2 sorted arrays
function sort(arr1, arr2) {
    let arr = [];
    let p = 0;
    let q = 0;
    while (p < arr1.length && q < arr2.length) {
        if (arr1[p] < arr2[q]) {
            arr.push(arr1[p]);
            p++;
        } else {
            arr.push(arr2[q]);
            q++;
        }
    }
    return [...arr, ...arr1.slice(p), ...arr2.slice(q)];
}