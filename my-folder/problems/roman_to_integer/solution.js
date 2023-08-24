var romanToInt = function(s) {
    const romans = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    // let arabics = 0
    // let i = 0

    // while (i < s.length) {
    //     if(
    //         (s.charAt(i) === "I" && (s.charAt(i+1) === "V" || s.charAt(i+1) === "X")) || 
    //         (s.charAt(i) === "X" && (s.charAt(i+1) === "L" || s.charAt(i+1) === "C")) || 
    //         (s.charAt(i) === "C" && (s.charAt(i+1) === "D" || s.charAt(i+1) === "M"))
    //       ) {
    //         arabics += (romans[s.charAt(i+1)] - romans[s.charAt(i)])
    //         i+=2
    //     } else {
    //         arabics += romans[s.charAt(i)]
    //         i++
    //     }
    // }

    let sum = 0

    for (let i = 0; i < s.length; i++) {
        sum = romans[s.charAt(i)] < romans[s.charAt(i+1)] ? sum - romans[s.charAt(i)] : sum + romans[s.charAt(i)]
    }
    return sum
};
