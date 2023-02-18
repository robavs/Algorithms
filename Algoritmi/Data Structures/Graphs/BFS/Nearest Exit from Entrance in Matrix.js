const nearestExit = (maze, pos) => {
    const queue = [[pos[0], pos[1]]]
    const m = maze.length
    const n = maze[0].length
    const coords = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const isValid = (i, j) => i >= 0 && i < m && j >= 0 && j < n
    let res = 0
    maze[pos[0]][pos[1]] = "+"
    
    while(queue.length){
        const size = queue.length

        for(let i = 0; i < size; i++){
            const [x, y] = queue.shift()
            
            for(const [a, b] of coords){
                const X = x + a
                const Y = y + b
                if(isValid(X, Y) && maze[X][Y] == '.'){
                    if(X == m - 1 || Y == n - 1 || Y == 0 || X == 0){
                        return res + 1
                    }
                    maze[X][Y] = "+"
                    queue.push([X, Y])
                }
            }
        }
        res++
    }
    return -1
};
