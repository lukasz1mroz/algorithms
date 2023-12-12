/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let vMax 

    while(left !== right) {
        let vCurr = (right - left) * Math.min(height[left], height[right]) 
        vMax = vMax > vCurr ? vMax : vCurr
        height[left] > height[right] ? right -- : left++
    }

    return vMax
};

