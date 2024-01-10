class MinStack{
    constructor() {
        this.items = []
        this.min = []
    }
}

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.items.push(val)
    let lastMinItem = this.min.at(-1);
    let minVal = Math.min(this.min.length > 0 ? lastMinItem : val, val)
    this.min.push(minVal)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.items.length !== 0) {
        this.items.pop()
        this.min.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.items.at(-1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min.at(-1)
 };

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */