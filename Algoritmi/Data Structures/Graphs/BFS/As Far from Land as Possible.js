const maxDistance = grid => {
    const m = grid.length
    const n = grid[0].length
    let zero = 0, one = 0
    const queue = []
    const isValid = (i, j) => i >= 0 && i < m && j >= 0 && j < n
    const coords = [[1, 0], [0, 1], [0, -1], [-1, 0]]
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 0)
                zero++
            else {
                one++
                queue.push([i, j])
            }
        }
    }
    if(one == m * n || zero == m * n)
        return -1
    
    let res = 0
    while(queue.length){
        let size = queue.length
        for(let i = 0; i < size; i++){
            const [x, y] = queue.shift()
            for(let [a, b] of coords){
                let X = x + a
                let Y = y + b
                if(isValid(X, Y) && grid[X][Y] == 0){
                    grid[X][Y] = 1
                    queue.push([X, Y])
                }
            }
        }
        res++
    }
    return res - 1
}    
