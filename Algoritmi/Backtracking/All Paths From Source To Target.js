const allPathsSourceTarget = graph => {
    const matrix = []
    const n = graph.length - 1
    
    const dfs = path => {
        const node = path[path.length - 1]
        if(node == n)
            return matrix.push(path.slice())

        for(let i = 0; i < graph[node].length; i++){
            path.push(graph[node][i])
            dfs(path)
            path.pop()
        }
        return matrix
    }
    return dfs([0])
}
