/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const arr = [];
    arr.push(1);
    arr.push(2);
    
    for(let i=2; i<n; i++){
        arr[i]=arr[i-1]+arr[i-2];
    }
    return arr[n-1];
};