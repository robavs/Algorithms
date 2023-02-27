const uniquePathsWithObstacles = grid => {
    const memo = {}
    if(grid[grid.length - 1][grid[0].length - 1] == 1)
        return 0
    const dfs = (i, j) => {
        const key =`${i},${j}`;
        if(key in memo) 
            return memo[key]
        
        if(i == grid.length - 1 && j == grid[0].length - 1) 
            return grid[i][j] ? 0 : 1

        if(i == grid.length || j == grid[0].length)
            return 0
            
        if(grid[i][j] == 1)
            return memo[key] = 0
        
        return memo[key] = dfs(i + 1, j) + dfs(i, j + 1)
    }   
    return dfs(0, 0)
}