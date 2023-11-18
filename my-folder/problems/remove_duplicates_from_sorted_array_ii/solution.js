/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //if(nums.length < 3) return nums.lenght
    
    let occ = 1
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] !== nums[i+1]) {
            if(occ > 2) {
                nums.splice(i+1, occ - 2)
            }
            occ = 1
        } else {
            occ++
        }
    }
    if(occ > 2) {
        nums.splice(0, occ - 2)
    }
    
    return nums.length
};