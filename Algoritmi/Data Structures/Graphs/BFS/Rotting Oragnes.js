const orangesRotting = grid => {
    const m = grid.length
    const n = grid[0].length
    const queue = []
    const moves = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    const isValid = (i, j) => i >= 0 && j >= 0 && i < m && j < n
    let c = 0
    let res = 0
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 2)
                queue.push([i, j])
            if(grid[i][j] == 1)
                c++
        }
    }
    if(c == 0) return 0
    
    while(queue.length){
        let size = queue.length
        for(let i = 0; i < size; i++){
            const [x, y] = queue.shift()
            for(let j = 0; j < 4; j++){
                const X = x + moves[j][0]
                const Y = y + moves[j][1]
                if(isValid(X, Y)){
                    if(grid[X][Y] == 1){
                        grid[X][Y] = 2
                        queue.push([X, Y])
                    }
                }
            }
        }
        res++
    }
    for(let i = 0; i < m; i++)
        for(let j = 0; j < n; j++)
            if(grid[i][j] == 1)
                return -1
    return res - 1
};
