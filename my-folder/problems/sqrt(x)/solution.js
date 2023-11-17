/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return mySqrtRec(x,1)
};

var mySqrtRec = function(x, y) {
    if (x - y < 0) {
        return 0
    } else if (x - y === 0) {
        return 1
    }
    return 1 + mySqrtRec(x -= y, y += 2)
};
