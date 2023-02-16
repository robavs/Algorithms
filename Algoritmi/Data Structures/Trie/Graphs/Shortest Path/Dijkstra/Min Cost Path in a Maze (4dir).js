// U ovakvim zadacima je upotrebljna logika Dijkstra algoritma
// nema potrebe da koristimo set vizitovanih vrenodsti upravo iz razloga jer
// updatujemo input matricu uvek sa vecim vrednostima pa se ne vracamo na manju
const minPath = matrix => {
    const m = matrix.length
    const n = matrix[0].length

    const moves = [[0, -1], [1, 0], [-1, 0], [0, 1]]
    const isValid = (i, j) => i >= 0 && j >= 0 && i < m && j < n

    const dist = Array(m).fill(0).map(() => Array(n).fill(Infinity))

    dist[0][0] = matrix[0][0]

    const queue = [[0, 0, dist[0][0]]]

    while (queue.length) {
        const [x, y, distance] = queue.shift()

        for (let i = 0; i < 4; i++) {
            const X = x + moves[i][0]
            const Y = y + moves[i][1]

            if (isValid(X, Y)) {
                if (dist[X][Y] > distance + matrix[X][Y]) {
                    dist[X][Y] = distance + matrix[X][Y]
                    queue.push([X, Y, dist[X][Y]])
                }
            }
        }
    }
    return dist[m - 1][n - 1]
}



