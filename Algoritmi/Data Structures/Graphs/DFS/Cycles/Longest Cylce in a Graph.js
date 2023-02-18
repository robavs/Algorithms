const longestCycle = edges => {
    let max = -1
    const dp = Array(edges.length).fill(undefined)

    const dfs = (node, dest, depth, visited) => {
        if (node == -1 || dp[node] != undefined)
            return -1
        if (depth > 0 && node == dest)
            return depth
        if (!visited.has(edges[node])) {
            visited.add(edges[node])
            return dfs(edges[node], dest, depth + 1, visited)
        }
        return -1
    }
    
    for (let i = 0; i < edges.length; i++) {
        const visited = new Set()
        const res = dfs(i, i, 0, visited)
        max = Math.max(max, res)
        if(res > -1)
            for(let node of visited)
                dp[node] = 1
    }
    return max
};
