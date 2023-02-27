const uniquePaths = (m, n) => {
    const dp = Array(m).fill(0).map(() => Array(n).fill(-1))
    const dfs = (i, j) => {
        if(i == m - 1 && j == n - 1) return 1
        if(i == m || j == n) return 0
        if(dp[i][j] != -1) return dp[i][j] 
        return dp[i][j] = dfs(i + 1, j) + dfs(i, j + 1)
    }
    return dfs(0, 0)
};

const UniquePaths = (m, n) => {
    const dp = Array(m).fill(0).map(() => Array(n).fill(1))
    for(let i = 1; i < m; i++)
        for(let j = 1; j < n; j++)
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    return dp[m - 1][n - 1]
};