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
            const currArr = [...tanksAfter.slice(i), ...tanksAfter.slice(0,i+1)]
            let currSum = currArr[0]
            console.log('currArr: ', currArr)
            for(let j = 1; j < currArr.length; j++) {
                currSum += currArr[j]
                if(currSum < 0) break
                if(j === currArr.length - 1) return i
            }
        }
        i++
    }
    return -1
};

