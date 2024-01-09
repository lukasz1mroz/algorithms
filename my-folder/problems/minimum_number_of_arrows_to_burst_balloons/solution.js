/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b) => a[1] - b[1])
    let overlaps = 0
    let first = 0
    let second = 1

    while(second < points.length) {
        while(second < points.length && points[first][1] >= points[second][0]) { 
           overlaps++
           second++
        }
        first = second
        second++
    }

    return points.length - overlaps
};