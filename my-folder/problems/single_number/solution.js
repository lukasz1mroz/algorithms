/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let uniqNum = 0;
    for (let idx = 0; idx < nums.length; idx++) {
        uniqNum = uniqNum ^ nums[idx];
    } return uniqNum;  
};