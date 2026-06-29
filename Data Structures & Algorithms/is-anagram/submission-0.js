class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const obj = {};
        if(s.length !== t.length) return false;
        for(let i =0; i< s.length; i++) {
            if(obj[s[i]]) {
                obj[s[i]] += 1;
            } else {
                obj[s[i]] = 1;
            }
        }
        console.log(obj)
        for(let i =0; i< t.length; i++) {
            if(obj[t[i]]) {
                 obj[t[i]] -= 1;
            } else {
                return false;
            }
        }
        return true
       
    }
}
