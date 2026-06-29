class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let current = 0, min = prices[0]
        for(let i =1; i< prices.length; i++) {
            const diff = prices[i]- min;
            if(diff > current){ 
                current = diff
            }
            if(prices[i] < min) {
                min = prices[i]
            }
        }
        return current;
    }
}
