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

        const bucket = []

       for(const [key, value] of map) {
        if(!bucket[value]) bucket[value] = [];
            bucket[value].push(key);
        }
        const result = [];
        for(let i = bucket.length-1; i>=0 && result.length < k; i--) {
            if(bucket[i]) result.push(...bucket[i])
        }
        return result.slice(0, k)
    }
}
