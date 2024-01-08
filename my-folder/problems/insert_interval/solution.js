var insert = function(intervals, newInterval) {
    const newIntIdx = intervals.findIndex(el=> el[0] > newInterval[0])
    newIntIdx === -1 ? intervals.push(newInterval) : intervals.splice(newIntIdx, 0, newInterval)

    for(let i = newIntIdx ; i < intervals.length; i++) {
        if(i > 0 && intervals[i][0] <= intervals[i-1][1]) {
            if(intervals[i][0] > intervals[i-1][0]) intervals[i][0] = intervals[i-1][0]
            if(intervals[i][1] < intervals[i-1][1]) intervals[i][1] = intervals[i-1][1]
            intervals[i-1] = 0
        }
    }
    
    return intervals.filter(el => el !== 0)
};