
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function(value) {
    if(this.stack.length === 0){
    this.stack.push([value, value])
    }else{
        let top = this.stack[this.stack.length - 1][1];
        if(top > value){
            this.stack.push([value,value]);
        }else{
            this.stack.push([value,top]);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.stack[this.stack.length - 1][1];
    return min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */