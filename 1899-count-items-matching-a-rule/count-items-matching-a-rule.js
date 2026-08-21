/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let checkIndex = 0;
    let result = 0;
    if (ruleKey === "color") {
        checkIndex = 1;
    } else if (ruleKey === "name") {
        checkIndex = 2;
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i][checkIndex] === ruleValue) {
            result++;
        }
    }

    return result;
};