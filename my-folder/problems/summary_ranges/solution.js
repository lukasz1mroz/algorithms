/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let rStart = nums[0]
    let rArray = []

    for (let i = 1; i <= nums.length; i++) {
        if(!nums[i] || Math.abs(nums[i] - nums[i-1]) > 1) {
            rArray.push(rStart === nums[i-1] ? `${nums[i-1]}` : `${rStart}->${nums[i-1]}`)
            rStart = nums[i]
        }
    }

    return rArray
};