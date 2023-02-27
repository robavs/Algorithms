const knightDialer = n => {
    const matrix = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["*", "0", "#"]
    ]
    const isValid = (i, j) => i >= 0 && j >= 0 && i < 4 && j < 3
    const dp = new Array(n + 1).fill(0).map(() => new Array(4).fill(0).map(() => new Array(3).fill(0)))
    const coords = [[2, 1], [1, -2], [1, 2], [-2, -1], [-2, 1], [2, -1], [-1, -2], [-1, 2]]
    
    const dfs = (i, j, moves) => {
        if(!isValid(i, j) || moves == n)
            return 0
            
        if(matrix[i][j] == '*' || matrix[i][j] == '#')
            return 0

        if(moves == n - 1)
            return 1

        if(dp[moves][i][j])
            return dp[moves][i][j]

        let res = 0
        for(let q = 0; q < 8; q++)
            res += dfs(i + coords[q][0], j + coords[q][1], moves + 1)

        return dp[moves][i][j] = res % (10 ** 9 + 7)
    }
    let res = 0
    for(let i = 0; i < matrix.length; i++)
        for(let j = 0; j < matrix[i].length; j++)
            if(matrix[i][j] != "#" || matrix[i][j] != "*")
                res += dfs(i, j, 0)  % (10 ** 9 + 7)
    return res  % (10 ** 9 + 7)
};
