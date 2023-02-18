const shortestPathBinaryMatrix = grid => {
    const n = grid.length
    const m = grid[0].length

    if(grid[n-1][m-1] == 1 || grid[0][0] == 1)
        return -1
    if(n == 1 && m == 1)
        return 1

    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < m
    const coords = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
    const queue = [[0, 0, 0]]
    grid[0][0] = 1

    while(queue.length){
        const [x, y, dist] = queue.shift()
        if(x == n - 1 && y == m - 1)
            return dist + 1
        for(let i = 0; i < coords.length; i++){
            const X = x + coords[i][0]
            const Y = y + coords[i][1]
            if(isValid(X, Y) && grid[X][Y] == 0){
                grid[X][Y] = 1
                queue.push([X, Y, dist+1])
            }
        }
    }
    return -1
};
