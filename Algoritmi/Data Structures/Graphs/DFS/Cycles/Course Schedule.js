// cycle detection bez topological sort, dobra fora je ovo za dp array da cuvas koji cvorovi
// koji su vec poseceni ne obrazuju ciklus i onda mozes odmah da izadjes iz petlje 
const canFinish = (n, edges) => {
    const graph = Array(n).fill(0).map(() => [])
    const dp = Array(n).fill(0)

    for (let i = 0; i < edges.length; i++) {
        const a = edges[i][0]
        const b = edges[i][1]
        if (a == b) return false
        graph[a].push(b)
    }

    const dfs = (node, visited) => {
        if (dp[node] == 1)
            return false

        if (visited.has(node))
            return true

        visited.add(node)

        for (let i = 0; i < graph[node].length; i++) 
            if (dfs(graph[node][i], visited))
                return true
    
        visited.delete(node)
        return false
    }

    for (let i = 0; i < n; i++) {
        if (dfs(i, new Set()))
            return false
        dp[i] = 1
    }

    return true
};
