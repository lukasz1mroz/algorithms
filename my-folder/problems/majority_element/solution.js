/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counts = {}

    for (let i = 0; i < nums.length; i++) {
        if(!counts.hasOwnProperty(nums[i])) {
            counts[nums[i]] = 0
        } else {
            counts[nums[i]]++
        }
    }
    
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
};