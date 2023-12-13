var threeSum = function(nums) {
    let results = []
    if(nums.length < 3) return results
    nums = nums.sort((a,b) => a-b)

    for(let i = 0; i < nums.length -2; i++) {
        if(nums[i] > 0) break
        if(i > 0 && nums[i] === nums[i-1]) continue
        
        let j = i + 1
        let k = nums.length -1
        
        while(j<k) {
            let currSum = nums[i] + nums[j] + nums[k]
            if(currSum === 0) {
                results.push([nums[i], nums[j], nums[k]])
                while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--
                j++
                k--
            } else if (currSum < 0) {
                j++ 
            } else {
                k--
            }
        }
    }

    console.log('res: ', results)
    return results
};