const knightProbability = (n, k, row, col) => {
    const total = 8 ** k
    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < n
    const comb = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, -1], [-2, 1]]
    const dp = Array(n).fill(0).map(() => Array(n).fill(0).map(() => Array(k + 1).fill(-1)))

    const dfs = (row, col, moves) => {
        if(!isValid(row, col))
            return 0
 
        if(dp[row][col][moves] != -1)
            return dp[row][col][moves]

        if(moves == 0)
            return 1

        let res = 0
        for(let i = 0; i < comb.length; i++)
            res += dfs(row + comb[i][0], col + comb[i][1], moves - 1)
        return dp[row][col][moves] = res
    }
    return dfs(row, col, k) / total
};