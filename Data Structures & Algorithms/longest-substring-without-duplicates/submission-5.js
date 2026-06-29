class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s === "") return 0
        const map = new Map();
        let maxLength = 1;
        let start = 0;
        for(let i =0; i<s.length; i++) {
            if(map.has(s[i]) && map.get(s[i]) >= start) {
                start = map.get(s[i]) + 1
            }
            maxLength = Math.max(maxLength, i-start+1)
            map.set(s[i], i)
        }
        return maxLength;
    }
}
