var longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
    let longestSeq = 0;

    for(let num of numsSet) {
        if(!numsSet.has(num - 1)) {
            let currNum = num;
            let currSeq = 1;

            while(numsSet.has(currNum + 1)) {
                currNum += 1;
                currSeq += 1;
            }

            longestSeq = Math.max(longestSeq, currSeq);
        }
    }

    return longestSeq;
};
