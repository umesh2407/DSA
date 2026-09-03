/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let newArr = [...nums, ...nums];
    let stack = [];
    let n = newArr.length;
    let ans = Array(n).fill(0);
    stack.push(newArr[n - 1]);
    ans[n - 1] = -1;
    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (newArr[i] >= top) {
                stack.pop();
            } else {
                ans[i] = top;
                break;
            }
        }
        if (stack.length === 0) {
            ans[i] = -1;
        }
        stack.push(newArr[i]);
    }
    return ans.slice(0, Math.floor(n / 2));
};