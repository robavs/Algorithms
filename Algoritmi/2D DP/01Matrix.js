//ovaj trik sam video kod nekog iz resenja
//ali sam i sam pre tako radio zadatke
//tako da ovaj deo i nije DP
//DP bi bio iz dva prolaza top-left  bottom-right sa updatom
const updateMatrix = matrix => {
    const coords = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    let rows = matrix.length
    let cols = matrix[0].length

    const dist = Array(rows).fill(0).map(() => Array(cols).fill(Infinity))
    const q = []
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(matrix[i][j] == 0){
                dist[i][j] = 0
                q.push([i, j])
            }
        }
    }           
    while(q.length){
        const [i, j] = q.shift()
        for(let [a, b] of coords){
            let x = a + i
            let y = b + j
            if(x >= 0 && x < rows && y >= 0 && y < cols){
                if(dist[x][y] > dist[i][j] + 1) {
                    dist[x][y] = dist[i][j] + 1;
                    q.push([x, y]);
                }
            }
        }
    }
    return dist
}