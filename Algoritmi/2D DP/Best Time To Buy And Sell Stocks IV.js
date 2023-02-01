const maxProfit = (k, prices) => {
    const dp = Array(prices.length).fill(0).map(() => Array(k).fill(0))
 
    const dfs = (index, buyed, num) => {
         if(num == k * 2)
             return 0
         if(index == prices.length)
             return 0
         if(dp[index][num])  
             return dp[index][num]
         if(buyed == 0){
             return dp[index][num] = Math.max(
                 -prices[index] + dfs(index + 1, 1, num + 1),
                 dfs(index + 1, 0, num)
             )
         }
         if(buyed == 1){
             return dp[index][num] = Math.max(
                 prices[index] + dfs(index + 1, 0, num + 1),
                 dfs(index + 1, 1, num)
             )
         }
    } 
    return dfs(0,0,0)
 };