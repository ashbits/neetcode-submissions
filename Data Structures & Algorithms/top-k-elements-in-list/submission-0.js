class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const output = [];
        nums.forEach(item => {
            map.set(item, (map.get(item) || 0) + 1)
        })

        console.log(map.entries());
        const array = Array.from(map.entries());
        array.sort((a,b) => b[1]- a[1]);
        for(let i = 0; i<k; i++) {
            output[i] = array[i][0]
        }
        return output;

    }
}
