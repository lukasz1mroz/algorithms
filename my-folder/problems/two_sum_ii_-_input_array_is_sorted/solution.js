/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0
    let end = numbers.length - 1
    let sum

    while(sum !== target) {
        sum = numbers[start] + numbers[end]
        if(sum > target) {
            end--
        } 
        if(sum < target) {
            start++
        }
    }

    return [start+1, end+1]
};
