/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const hundredsRom = new Map([
        [1, "C"],
        [4, "CD"],
        [5, "D"],
        [9, "CM"]       
    ])
    const tensRom = new Map([
        [1, "X"],
        [4, "XL"],
        [5, "L"],
        [9, "XC"],     
    ])
    const onesRom = new Map([
        [1, "I"],       
        [4, "IV"],       
        [5, "V"],       
        [9, "IX"],      
    ])

    const mapRomNums = (num, currRomStr, mapping) => {
        if(mapping.has(num)) { 
            currRomStr += mapping.get(num)
        } else if (num < 4) {
            currRomStr += mapping.get(1).repeat(num)
        } else {
            currRomStr += mapping.get(5)
            currRomStr += mapping.get(1).repeat(num - 5)
        }
        return currRomStr
    }

    let romanStr = ''
    let currNum = num
    
    while (currNum > 0) {
        if(currNum >= 1000) {
            romanStr += 'M'.repeat(num / 1000)
            currNum = currNum % 1000
        } else if(currNum >= 100) {
            romanStr = mapRomNums(Math.floor(currNum / 100), romanStr, hundredsRom)
            currNum = currNum % 100
        } else if (currNum >= 10) {
            romanStr = mapRomNums(Math.floor(currNum / 10), romanStr, tensRom)
            currNum = currNum % 10
        } else if (currNum >= 1) {
            romanStr = mapRomNums(currNum, romanStr, onesRom)
            currNum = 0
        }
    }


    return romanStr
};