/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let hash = {};
    let num = 96;
    for (let i = 0; i < key.length; i++) {
        if (!hash[key[i]] && key[i] !== " ") {
            num++;
            hash[key[i]] = String.fromCharCode(num);
        }
    }
    let result = "";
    for (let i = 0; i < message.length; i++) {
        if (message[i] !== " ") {
            result += hash[message[i]];
        } else {
            result += " ";
        }
    }
    return result;
};