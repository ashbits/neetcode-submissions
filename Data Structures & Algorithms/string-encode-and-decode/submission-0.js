class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        strs.forEach(str=> {
            result += `${str.length}#${str}`
        })
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] != '#') {
                j++;
            }
            const stringLength = parseInt(str.slice(i, j))
            result.push(str.slice(j+1, j+1+stringLength))

            i = j+stringLength+1
        }

        return result;
    }
}
