/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let result = true
    let dist = 1
    for(let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] >= dist) {
            result = true
            dist = 1
        } else {
            result = false
            dist++
        }
    }
    return result
};
