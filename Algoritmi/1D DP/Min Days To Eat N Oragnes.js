const minDays = n => {
    const dp = {}
    
    const dfs = n => {
        if(n <= 1) return n
        if(n in dp) return dp[n]

        if(n % 2 != 0 && n % 3 != 0)
            return dp[n] = 1 + dfs(n - 1)

        if(n % 2 == 0 && n % 3 == 0){
            return dp[n] = 1 + Math.min(
                dfs(n / 2),
                dfs(n - 2 * n / 3),
            )
        }
        if(n % 2 == 0)
            return  dp[n] = 1 + Math.min(dfs(n / 2), dfs(n-1))
            
        if(n % 3 == 0){
            return dp[n] = 1 + Math.min(dfs(n - 2 * n / 3), dfs(n-1))
        }
    }
    return dfs(n)
};
