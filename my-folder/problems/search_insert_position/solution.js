/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let found = -1
    let currNums = [...nums]

    while (currNums.length > 1 && found < 0) {
        const midIdx = Math.floor(currNums.length / 2)

        if(currNums[midIdx] === target) {
            found = target
        } else if(currNums[midIdx] > target) {
            currNums.splice(midIdx, currNums.length)
        } else {
           currNums.splice(0, midIdx) 
        }
    }
    
    const val = currNums[0]
    const valIdx = nums.indexOf(val)
    const foundIdx = nums.indexOf(found)

    return found > -1 ? foundIdx : target > val ? valIdx + 1 : valIdx
};