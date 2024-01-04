var longestConsecutive = function(nums) {
    nums = [...new Set(nums)].sort((a, b) => a - b)
    let [longestSeq, currSeq] = [0,0]

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] - 1 === nums[i-1] || i === 0) currSeq++ 
        else {
            longestSeq = longestSeq > currSeq ? longestSeq : currSeq
            currSeq = 1
        }
    }
    longestSeq = longestSeq > currSeq ? longestSeq : currSeq

    return longestSeq
};