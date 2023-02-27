//incicijalno nisam umeo
const coinChange = (coins, amount) => {
    const dp = Array(amount).fill(-1)
    
    const dfs = sum => {
        if(sum > amount)
            return Infinity

        if(sum == amount)
            return 0

        if(dp[sum] != -1)
            return dp[sum]

        let res = Infinity

        for(let i = 0; i < coins.length; i++)
            res = Math.min(res, 1 + dfs(sum + coins[i]))
        return dp[sum] = res
    }
    const res = dfs(0)
    return res == Infinity ? -1 : res
};
