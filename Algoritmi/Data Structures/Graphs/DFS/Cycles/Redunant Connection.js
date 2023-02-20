// ovo je nacin preko dfs koji radi sporije u odnosu na union find koji cu da napisem dole
const findRedundantConnection = edges => {
    const graph = Array(edges.length + 1).fill(0).map(() => [])
    for (let i = 0; i < edges.length; i++) {
        graph[edges[i][0]].push(edges[i][1])
        graph[edges[i][1]].push(edges[i][0])
    }

    const dfs = (node, visited, initial) => {
        if (visited.size > 2 && node == initial)
            return true

        for (let i = 0; i < graph[node].length; i++) {
            if (!visited.has(graph[node][i])) {
                visited.add(graph[node][i])
                if (dfs(graph[node][i], visited, initial))
                    return true
                visited.delete(graph[node][i])
            }
        }
        return false
    }

    for (let i = 1; i < edges.length + 1; i++) {
        const visited = new Set()
        if (dfs(i, visited, i)) {
            for (let j = edges.length - 1; j >= 0; j--) {
                const node1 = edges[j][0]
                const node2 = edges[j][1]

                if (visited.has(node1) && visited.has(node2))
                    return [node1, node2]
            }
        }
    }
};
