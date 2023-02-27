const minFallingPathSum = matrix => {
    const dp = Array(matrix.length).fill(0).map(() => Array(matrix[0].length).fill(Infinity))

    const dfs = (i, j) => {
        if(i == matrix.length)
            return 0

        if(j < 0 || j >= matrix[0].length)
            return Infinity

        if(dp[i][j] != Infinity)
            return dp[i][j]

        return dp[i][j] = matrix[i][j] + Math.min(
            dfs(i + 1, j),
            dfs(i + 1, j - 1),
            dfs(i + 1, j + 1)
        ) 
    }    

    let min = Infinity
    for(let j = 0; j < matrix[0].length; j++)
        min = Math.min(min, dfs(0, j))
    return min
};

