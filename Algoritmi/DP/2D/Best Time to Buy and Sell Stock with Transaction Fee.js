const maxProfit = (prices, fee) => {
    const dp = Array(prices.length).fill(0).map(() => Array(2).fill(Infinity))
    
    const dfs = (i, buyed) => {
        if(i >= prices.length)
            return 0

        if(dp[i][buyed] != Infinity)
            return dp[i][buyed]
        
        let res = 0

        if(buyed == 0)
            res = Math.max(
                -prices[i] + dfs(i + 1, 1),
                dfs(i + 1, 0)
            )
        else
            res = Math.max(
                prices[i] - fee + dfs(i + 1, 0),
                dfs(i + 1, 1)
            )
        return dp[i][buyed] = res
    }
    return dfs(0, 0)
}
