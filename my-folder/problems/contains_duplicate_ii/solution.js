/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const numsIdxs = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (i - numsIdxs[nums[i]] <= k) {
            return true
        }
        numsIdxs[nums[i]] = i
    }
    return false
};