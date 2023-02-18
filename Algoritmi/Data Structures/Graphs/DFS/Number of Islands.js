const numIslands = grid => {
    const dfs = (i, j) => {
        if(i >= 0 && i < grid.length && j >= 0 && j < grid[0].length
        && grid[i][j] == 1){
            grid[i][j] = 0
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)
        }
    }   
    let res = 0
    for(let i = 0; i < grid.length; i++)
        for(let j = 0; j < grid[i].length; j++)
            if(grid[i][j] == 1){
                res++
                dfs(i, j)
            }
    return res
}
