const minCostConnectPoints = pts => {
    const visited = new Set()
    visited.add(0)
    let cost = 0
    const queue = [[pts[0][0], pts[0][1]]]
    const dist = Array(pts.length).fill(Infinity)

    while (queue.length) {
        const [x, y] = queue.shift()

        let index // flag koji nam govori sta da ukljucimo u MST
        let min = Infinity

        for (let i = 0; i < pts.length; i++) {
            if (!visited.has(i)) {
                dist[i] = Math.min(Math.abs(pts[i][0] - x) + Math.abs(pts[i][1] - y), dist[i])
                if (dist[i] < min) {
                    min = dist[i]
                    index = i
                }
            }
        }
        if (index) {
            cost += dist[index]
            queue.push([pts[index][0], pts[index][1]])
            visited.add(index)
        }
    }
    return cost
};

const pts = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]
console.log(minCostConnectPoints(pts))