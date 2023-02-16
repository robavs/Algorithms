const networkDelayTime = (times, n, k) => {
    const graph = Array(n + 1).fill([])
    const edges = Array(n + 1).fill([])
    const dist = Array(n + 1).fill(Infinity)
    dist[0] = 0
    dist[k] = 0
    for (let i = 0; i < times.length; i++) {
        if (!graph[times[i][0]].length) {
            graph[times[i][0]] = []
            edges[times[i][0]] = []
        }
        graph[times[i][0]].push(times[i][1])
        edges[times[i][0]].push(times[i][2])
    }

    const queue = [k]

    while (queue.length) {
        const top = queue.shift()

        const adjencyList = graph[top]

        for (let i = 0; i < adjencyList.length; i++) {
            if (dist[adjencyList[i]] > edges[top][i] + dist[top]) {
                dist[adjencyList[i]] = edges[top][i] + dist[top]
                queue.push(adjencyList[i])
            }
        }
    }
    let max = 0
    for (let i = 0; i < dist.length; i++) {
        if (dist[i] > max) max = dist[i]
        if (dist[i] == Infinity) return -1
    }
    return max
};
