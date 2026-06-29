class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
                    const map = new Map();
        for(let i = 0; i< strs.length; i++) {
            const count = new Array(26).fill(0);
            const str = strs[i];

            for(let i = 0; i< str.length; i++) {
                count[str[i].charCodeAt()-97]++ 
            }
            const key = count.join('#');
            if(!map.has(key)) {
              map.set(key, [])
            }
            map.get(key).push(str);
        }
        return [ ...map.values()];

    }
}
