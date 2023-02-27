const minimumTotal = matrix => {
    const n = matrix.length
    const dp = Array(n + 1).fill(0).map(() => Array(n + 1).fill(undefined))

    const dfs = (index, i) => {
        if(index == n - 1)
            return matrix[0][0]

        if(dp[index][i] != undefined)
            return dp[index][i]

        return dp[index][i] = Math.min(
            matrix[index + 1][i] + dfs(index + 1, i),
            matrix[index + 1][i + 1] + dfs(index + 1, i + 1)
        )
    }
    return dfs(0, 0) 
};

const MinimumTotal = dp => {
    for(let i = dp.length - 1; i >= 1; i--)
        for(let j = 0; j < dp[i - 1].length; j++)
            dp[i - 1][j] += Math.min(dp[i][j], dp[i][j + 1])
    return dp[0][0]
};
