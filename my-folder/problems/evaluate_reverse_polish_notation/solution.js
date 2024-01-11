/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    const ops = {
        '+': (a,b) => a+b, 
        '-': (a,b) => a-b,
        '*': (a,b) => a*b,
        '/': (a,b) => Math.trunc(a/b),
    }
    for(let i = 0; i < tokens.length; i++) {
        if(!ops[tokens[i]]) {
            stack.push(parseInt(tokens[i]))
        } else {
            let operand2 = stack.pop()
            let operand1 = stack.pop()
            
            stack.push(ops[tokens[i]](operand1, operand2))
        } 
    }
    return stack[0]
};
