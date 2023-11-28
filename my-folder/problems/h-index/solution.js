/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let highest = 0
    
    for (let i = 0; i < citations.length; i++) {
        const papers = citations.filter(cit => cit >= citations[i])
        if(citations[i] > highest && papers.length > highest) {
            highest = citations[i] < papers.length ? citations[i] : papers.length
        }
    }

    return highest
};