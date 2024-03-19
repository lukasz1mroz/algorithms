/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    let result = [];
    backtrack(nums, []);

    function backtrack(nums, current) {
        if(nums.length === 0) {
            result.push(current);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            backtrack([...nums.slice(0, i), ...nums.slice(i + 1)], [...current, nums[i]]);
        }
    }

    return result;
}
