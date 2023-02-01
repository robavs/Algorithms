const longestIncreasingPath = matrix => {
    const m = matrix.length
    const n = matrix[0].length
    const dp = Array(m).fill(0).map(() => Array(n).fill(-1))
    const coords = [[1, 0], [-1, 0], [0, 1], [0, - 1]]
    const isValid = (i, j) => i < m && i >= 0 && j < n && j >= 0

    const dfs = (i, j) => {
        if(dp[i][j] != -1)
            return dp[i][j]
        let res = 1
        for(const [a, b] of coords){
            const A = i + a, B = j + b
            if(isValid(A, B) && matrix[A][B] > matrix[i][j])
                res = Math.max(res, 1 + dfs(A, B))
        }
        return dp[i][j] = res
    }
    let max = -Infinity
    for(let i = 0; i < m; i++)
        for(let j = 0; j < n; j++)
            max = Math.max(max, dfs(i, j))
    return max
};