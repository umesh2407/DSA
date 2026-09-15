/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let Hashmap = {};
    for (let i = 0; i < nums.length; i++) {
        Hashmap[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let pairTofind = target - nums[i];

        if (Hashmap[pairTofind] && Hashmap[pairTofind] != i) {
            return [i, Hashmap[pairTofind]]
        }
    }
};