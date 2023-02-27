const findPaths = (m, n, maxMove, startRow, startColumn) => {
    const dp = {}
    const isValid = (i, j) => i >= 0 && j >= 0 && i < m && j < n
    const dfs = (i, j, moves) => {
        const key = i + "," + j + "," + moves
        if(!isValid(i, j))
            return 1
        if(moves == maxMove)
            return 0
        if(key in dp)
            return dp[key]
        return dp[key] = ( dfs(i + 1, j, moves + 1) + 
                           dfs(i - 1, j, moves + 1) +
                           dfs(i, j - 1, moves + 1) +
                           dfs(i, j + 1, moves + 1)) % (10 ** 9 + 7)
    }    
    return dfs(startRow, startColumn, 0) 
};
