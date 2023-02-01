const numberOfPaths = (grid, k) => {
    const m = grid.length
    const n = grid[0].length
    const dp = Array(m).fill(0).map(() => Array(n).fill(0).map(() => Array(k).fill(-1)))
    const moduo = 10 ** 9 + 7
    const dfs = (i, j, sum) => {
        if(i == m || j == n)
            return 0

        if(i == m - 1 && j == n - 1 && ((sum + grid[i][j]) % k == 0))
            return 1

        if(dp[i][j][sum] != -1)
            return dp[i][j][sum]

        let down = dfs(i + 1, j, (sum + grid[i][j]) % k) % moduo
        let right = dfs(i, j + 1, (sum + grid[i][j]) % k) % moduo

        return dp[i][j][sum] =  down + right
    }
    return dfs(0, 0, 0) % moduo
};