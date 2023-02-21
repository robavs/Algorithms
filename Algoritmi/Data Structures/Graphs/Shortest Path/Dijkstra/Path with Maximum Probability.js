const maxProbability = (n, edges, succProb, start, end) => {
    const graph = Array(n).fill(0).map(() => [])
    const cost = {}

    for (let i = 0; i < edges.length; i++) {
        graph[edges[i][0]].push(edges[i][1])
        graph[edges[i][1]].push(edges[i][0])

        if(edges[i][0] < edges[i][1])
            cost[edges[i][0] + "," + edges[i][1]] = succProb[i]
        else 
            cost[edges[i][1] + "," + edges[i][0]] = succProb[i]
    }

    const dist = Array(n).fill(-Infinity)
    dist[start] = 1
    const queue = [start]

    while (queue.length) {
        const node = queue.shift()

        for (let i = 0; i < graph[node].length; i++) {
            let key
            if(node < graph[node][i])
                key = node + "," + graph[node][i]
            else 
                key = graph[node][i] + "," + node

            const currDist = dist[node] * cost[key]

            if (dist[graph[node][i]] < currDist) {
                dist[graph[node][i]] = currDist
                queue.push(graph[node][i])
            }
        }
    }
    return dist[end] == -Infinity ? 0 : dist[end]
};
