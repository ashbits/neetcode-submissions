class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set(nums);
        if(nums.length !== set.size) {
            return true;
        }
        return false;
    }
}
