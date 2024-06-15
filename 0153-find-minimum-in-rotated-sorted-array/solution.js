/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums[0] <= nums[nums.length - 1]) return nums[0];
    
    let mid = Math.floor(nums.length / 2);

    if(nums[mid+1] < nums[mid]) return nums[mid+1];
    if(nums[mid-1] > nums[mid]) return nums[mid];

    if(nums[nums.length - 1] < nums[mid]) return findMin(nums.slice(mid+1));
    if(nums[nums.length - 1] > nums[mid]) return findMin(nums.slice(0, mid));
};
