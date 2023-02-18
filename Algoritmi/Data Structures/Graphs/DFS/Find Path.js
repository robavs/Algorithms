const validPath = (n, edges, source, destination) => {
    const graph = Array(n).fill(0).map(() => [])
    const visited = new Set()
    for (let [u, v] of edges) {
        graph[u].push(v)
        graph[v].push(u)
    }
    const dfs = node => {
        if (node == destination)
            return true
        visited.add(node)
        for (let i = 0; i < graph[node].length; i++) {
            if (!visited.has(graph[node][i]))
                if (dfs(graph[node][i]))
                    return true
        }
        return false
    }
    return dfs(source)
};