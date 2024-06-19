/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let searchRec = function(nums, target, start=0, end=nums.length-1) {
        if(start > end) return -1;

        let mid = Math.floor((start + end) / 2);

        if(nums[mid] === target) return mid;

        if(nums[start] <= nums[mid]) { // left half is sorted
            if(target >= nums[start] && target < nums[mid]) {
                return searchRec(nums, target, start, mid-1);
            } else {
                return searchRec(nums, target, mid+1, end);
            }
        } else { // right half is sorted
            if(target > nums[mid] && target <= nums[end]) {
                return searchRec(nums, target, mid+1, end);
            } else {
                return searchRec(nums, target, start, mid-1);
            }
        }
    };

    return searchRec(nums, target);
};
