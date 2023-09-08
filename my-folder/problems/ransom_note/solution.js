/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function(ransomNote, magazine) {

    if (ransomNote.length > magazine.length) {
        return false
    }

    if (ransomNote.length === 1 && magazine.length === 1 && ransomNote !== magazine) {
        return false
    }

    const noteChars = {}
    const magChars = {}

    for (let i = 0; i < magazine.length; i++) {
        if (i < ransomNote.length) {
            if (noteChars[ransomNote[i]]) {
                noteChars[ransomNote[i]]++
            } else {
                noteChars[ransomNote[i]] = 1
            }
        }
        if (magChars[magazine[i]]) {
            magChars[magazine[i]]++
        } else {
            magChars[magazine[i]] = 1
        }
    }
    
    let resp = true
    Object.keys(noteChars).forEach(char => {
        console.log(noteChars[char], magChars[char])
        if(!magChars[char] || noteChars[char] > magChars[char]) {
            resp = false
        }
    })

    return resp
};