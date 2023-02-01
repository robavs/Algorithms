const numSquares = n => {
    const dp = Array(n + 1).fill(0)
    const nums = Array(~~(n ** 0.5)).fill(0).map((_, i) => (i + 1) ** 2)
    
    const dfs = target => {
        if(target == 0) return 0

        if(dp[target]) return dp[target]
        
        let min = Infinity
        
        for(let i = 0; i < nums.length; i++)
            if(target - nums[i] >= 0)
                min = Math.min(min, 1 + dfs(target - nums[i]))

        return dp[target] = min 
    }
    return dfs(n)
}
