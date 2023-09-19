/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsObj = {}

    for(let i = 0; i < nums.length; i++) {
      let candidate = nums[i]
      if(numsObj[target - candidate] !== undefined) {
          return [numsObj[target - candidate], i]
      }
      numsObj[candidate] = i
    }
    return []
};