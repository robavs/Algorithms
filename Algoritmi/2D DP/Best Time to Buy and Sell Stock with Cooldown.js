const maxProfit = prices => {
    const dp = Array(prices.length).fill(0).map(() => Array(2).fill(-1))
    const dfs = (index, buyed) => {
        if(index >= prices.length)
            return 0

        if(dp[index][buyed] != -1)
            return dp[index][buyed]

        if(buyed == 1)
            return dp[index][buyed] = Math.max(
                prices[index] + dfs(index + 2, 0),
                dfs(index + 1, 1)
            )
        
        return dp[index][buyed] = Math.max(
                    -prices[index] + dfs(index + 1, 1),
                    dfs(index + 1, 0)
                )
    }
    return dfs(0, 0)
};