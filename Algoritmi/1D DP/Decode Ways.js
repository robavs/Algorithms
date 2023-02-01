const numDecodings = s => {
    const set = new Set(Array(26).fill(0).map((_, i) => String(i + 1)))
    const dp = Array(s.length).fill(-1)
    
    const dfs = index => {
        if(index == s.length)
            return 1

        if(dp[index] != -1)
            return dp[index]

        let res = 0

        if(set.has(s[index]))
            res += dfs(index + 1)

        if(set.has(s[index] + s[index + 1]))
            res += dfs(index + 2)

        return dp[index] = res
    }
    return dfs(0)
};