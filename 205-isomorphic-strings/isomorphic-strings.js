/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;
    let sTot = new Map();
    let tTos = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!sTot.has(s[i]) && !tTos.has(t[i])) {
            sTot.set(s[i], t[i]);
            tTos.set(t[i], s[i]);
        } else if (tTos.get(t[i]) !== s[i] || sTot.get(s[i]) !== t[i]) {
            return false;
        }
    }

    return true;
};