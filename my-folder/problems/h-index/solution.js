/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let highestH = 0
    citations.sort((a,b) => a-b) 

    for (let i = 0; i < citations.length; i++) {
        const numOfDocsWithCits = citations.length - i
        highestH = numOfDocsWithCits > citations[i] ? citations[i] : numOfDocsWithCits > highestH ? numOfDocsWithCits : highestH
    }

    return highestH
};
