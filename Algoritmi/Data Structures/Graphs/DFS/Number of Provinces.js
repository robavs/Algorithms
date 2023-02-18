const findCircleNum = isConnected => {
    const n = isConnected.length
    const graph = Array(n).fill(0).map(() => [])
    const visited = new Set();
    let c = 0
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i != j && isConnected[i][j] == 1) {
                graph[i].push(j)
            }
        }
    }
   
    const dfs = node => {
        visited.add(node)
        for (let i = 0; i < graph[node].length; i++) 
            if (!visited.has(graph[node][i])) 
                dfs(graph[node][i])
    }

    for (let i = 0; i < n; i++){
        if (!visited.has(i)) {
            c++
            dfs(i)
        }
    }
    return c
};
