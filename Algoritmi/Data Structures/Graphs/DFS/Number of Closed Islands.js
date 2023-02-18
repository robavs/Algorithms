const closedIsland = grid => {
    const m = grid.length
    const n = grid[0].length

    const isValid = (i, j) => i >= 0 && i < m && j >= 0 && j < n

    const dfs = (i, j) => {
        if(isValid(i, j) && !grid[i][j]){
            grid[i][j] = 1
            dfs(i + 1, j), dfs(i - 1, j), dfs(i, j + 1), dfs(i, j - 1)
        }
    }
    let res = 0
    for(let i = 0; i < m; i++)
        for(let j = 0; j < n; j++)
            if((i == 0 || j == 0 || i == m - 1 || j == n - 1) && !grid[i][j])
                dfs(i, j)
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(!grid[i][j]){
                res++
                dfs(i, j)
            }
        }
    }
    return res
};
