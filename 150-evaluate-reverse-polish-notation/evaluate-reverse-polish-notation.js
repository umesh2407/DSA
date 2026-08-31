/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let funMap = {
        "+": sum,
        "-": minus,
        "*": multiply,
        "/": divide
    }
    let stack = [];
    let result;
    for (let i = 0; i < tokens.length; i++) {
        if (funMap[tokens[i]]) {
            let second = Number(stack.pop());
            let first = Number(stack.pop());
            result = funMap[tokens[i]](first, second);
            stack.push(result);
        } else {
            stack.push(tokens[i]);
        }
    }
    return Number(stack.pop());
};

function sum(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return Math.trunc(a / b);
}