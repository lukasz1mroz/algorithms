/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = []
    let prod = 1

    for (let i = 0; i < nums.length; i++) {
        result[i] = prod
        prod = prod * nums[i]
    }

    prod = 1
    for (let i = result.length - 1; i >= 0; i--) {
        result[i] = result[i] * prod
        prod = prod * nums[i]
    }

    return result
};