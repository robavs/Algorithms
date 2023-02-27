const numDistinct = (s, t) => {
    const dp = Array(s.length).fill(0).map(() => Array(t.length).fill(-1))
    const dfs = (i, j) => {
        if(j == t.length)
            return 1
        if(i == s.length)
            return 0
        if(dp[i][j] != -1)
            return dp[i][j]
        if(s[i] == t[j])
            return dp[i][j] = dfs(i + 1, j + 1) + dfs(i + 1, j)
        return dp[i][j] = dfs(i + 1, j)
    }
    return dfs(0, 0)
};