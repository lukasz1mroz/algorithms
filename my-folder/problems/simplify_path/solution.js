/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = []
    const dirs = path.split('/')

    for(const dir of dirs) {
        if(dir === '.' || !dir) {
            continue
        } else if(dir === '..') {
            if(stack.length > 0) {
                stack.pop()
            }
        } else {
            stack.push(dir)
        }
    }

    return '/' + stack.join('/')
};