const shortestBridge = grid => {
    const n = grid.length
    const m = grid[0].length

    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < m
    const coords = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const dfs = (i, j) => {
        if(isValid(i, j) && grid[i][j] == 1){
            grid[i][j] = 2
            for(let [a, b] of coords)
                dfs(a + i, j + b)
        }
    }

    let flag = 0
    const queue = []
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j] == 1 && !flag){
                dfs(i, j)
                flag = 1
            }
            else if(grid[i][j] == 1 && flag)
                queue.push([i, j, 0])
        }
    }
    while(queue.length){
        const [x, y, distance] = queue.shift()
            
        for(let i = 0; i < coords.length; i++){
            const X = x + coords[i][0]
            const Y = y + coords[i][1]
            if(isValid(X, Y) && grid[X][Y] != 1){
                if(grid[X][Y] == 2)
                    return distance 
                grid[X][Y] = 1
                queue.push([X, Y, distance+1])
            }
        }
    }
};
