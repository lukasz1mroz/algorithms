function letterCombinations(digits: string): string[] {
    if (digits === "") return [];
    const lettersMap = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']]
    ]);

    let combinations: string[] = [];
    generateCombinations("", digits);

    function generateCombinations(combination: string, nextDigits: string) {
        if (nextDigits.length === 0) {
            combinations.push(combination);
        } else {
            for (let letter of lettersMap.get(nextDigits[0])) {
                generateCombinations(combination + letter, nextDigits.substring(1));
            }
        }
    }

    return combinations;
}

// If digits is empty, return []
// Create map with indexes and arrays of letters
// If digits is 1, return all it's vals
// Create 2D array from vals and result var
// Create nested loops conditionally
// Iterate through all and add combinations to result
