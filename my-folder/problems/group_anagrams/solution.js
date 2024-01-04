var groupAnagrams = function(strs) {
    let anagrams = {}

    for(let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split("").sort().join("")

        anagrams[sortedStr] !== undefined ? anagrams[sortedStr].push(strs[i]) : anagrams[sortedStr] = [strs[i]]
    }

    return Object.values(anagrams)
};