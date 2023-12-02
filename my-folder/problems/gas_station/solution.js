/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if(gas.reduce((a,c) => a+c) < cost.reduce((a,c) => a+c)) return -1
    
    const tanksAfter = gas.map((curr, i) => curr - cost[i])
    let i = 0

    while(i < gas.length) {
        if(gas[i] > 0 && tanksAfter[i] >= 0 && !(gas[i] === gas[i-1] && cost[i] === cost[i-1])) {
            let currSum = tanksAfter[i]
            let k = i+1

            for(let j = 0; j <= tanksAfter.length; j++) {
                if(k > tanksAfter.length - 1) k = 0
                currSum += tanksAfter[k]
                k++
                if(currSum < 0) break
                if(j === tanksAfter.length) return i
            }
        }
        i++
    }
    return -1
};

