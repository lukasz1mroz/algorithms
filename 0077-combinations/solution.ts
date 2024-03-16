function combine(n: number, k: number): number[][] {
    let combinations = []

    function findCombinations(currComb, start) {
        if(currComb.length === k) {
            combinations.push([...currComb])
            return
        } 

        for(let i = start; i < n; i++) {
            currComb.push(i+1)
            findCombinations(currComb, i+1)
            currComb.pop()
        }
    }

    findCombinations([], 0)
    return combinations
};
