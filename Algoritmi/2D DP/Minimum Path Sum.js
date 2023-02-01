const minPathSum = matrix => {
    const m = matrix.length
    const n = matrix[0].length
    const dp = Array(m).fill(0).map(() => Array(n).fill(-1))

    const dfs = (i, j) => {
        if(i == m || j == n) return Infinity

        if(i == m - 1 && j == n - 1) return matrix[m - 1][n - 1]

        if(dp[i][j] != -1) return dp[i][j]

        return dp[i][j] = matrix[i][j] + Math.min(
            dfs(i + 1, j),
            dfs(i, j + 1)
        )
    }
    return dfs(0, 0, 0)
}

const MinPathSum = matrix => {
    const m = matrix.length
    const n = matrix[0].length

    for(let i = 1; i < n; i++) 
        matrix[0][i] += matrix[0][i - 1]

    for(let i = 1; i < m; i++) 
        matrix[i][0] += matrix[i - 1][0]

    for(let i = 1; i < m; i++)
        for(let j = 1; j < n; j++)
            matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1])
    return matrix[m - 1][n - 1]
}