/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    let getCombinations = (currComb, startIdx, currTarget) => {
        if (currTarget === 0) {
            result.push(currComb);
            return;
        }

        for (let i = startIdx; i < candidates.length; i++) {
            if (currTarget - candidates[i] >= 0) {
                getCombinations([...currComb, candidates[i]], i, currTarget - candidates[i]);
            }
        }
    };

    getCombinations([], 0, target);

    return result;
};
