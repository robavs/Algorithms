const frogPosition = (n, edges, t, target) => {
    const graph = Array(n + 1).fill(0).map(() => [])
    for (let i = 0; i < edges.length; i++) {
        graph[edges[i][0]].push(edges[i][1])
        graph[edges[i][1]].push(edges[i][0])
    }
    const queue = [[1, 0, 1]] // vertex , depth & probability
    const visited = new Set()
    visited.add(1)

    while (queue.length) {
        const [vertex, depth, probability] = queue.shift()

        if (vertex == target && depth == t)
            return probability

        let currProb = 0
        for (let i = 0; i < graph[vertex].length; i++) 
            if (!visited.has(graph[vertex][i])) 
                currProb++
            
        for (let i = 0; i < graph[vertex].length; i++) 
            if (!visited.has(graph[vertex][i])) 
                visited.add(graph[vertex][i])
                queue.push([graph[vertex][i], depth + 1, probability * 1 / currProb])
            
        if (currProb == 0 && vertex == target && depth < t)
            return probability
    }
    return 0
}