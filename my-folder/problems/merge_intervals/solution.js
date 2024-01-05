/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1])
    
    for(let i = intervals.length - 2; i >= 0; i--) {
        if(intervals[i][1] >= intervals[i+1][0]) {
            if(intervals[i][0] > intervals[i+1][0]) intervals[i][0] = intervals[i+1][0]
            if(intervals[i][1] < intervals[i+1][1]) intervals[i][1] = intervals[i+1][1]
            intervals.splice(i+1,1)
        }
    }

    return intervals
};