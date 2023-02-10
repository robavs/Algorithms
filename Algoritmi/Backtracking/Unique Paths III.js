const uniquePathsIII = grid => {
    let res = 0
    let zeroSquares = 0
    const m = grid.length
    const n = grid[0].length
    const coords = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const isValid = (i, j) => i >= 0 && j >= 0 && i < m && j < n
    let x, y

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                x = i
                y = j
            }
            if(grid[i][j] == 0)
                zeroSquares++
        }
    }
    
    const dfs = (i, j, count) => {
        for(let q = 0; q < 4; q++){
            const X = i + coords[q][0]
            const Y = j + coords[q][1]
            if(isValid(X, Y)){
                if(count == zeroSquares && grid[X][Y] == 2){
                    return res++
                }
                if(grid[X][Y] == 0){
                    grid[X][Y] = 1
                    dfs(X, Y, count + 1)
                    grid[X][Y] = 0
                }
            }
        }
    }
    dfs(x, y, 0)
    return res
};
