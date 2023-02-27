// Khan's algoritam za topological sort
// Incijalno odredimo indegree za sve cvorove
// nakon toga ih dodamo u red
// i obilazimo sve njihove susede
// tako sto dekrementiramo degree za svaki incidenti cvor
// i samo ako je inDegree nekog cvora nula dodajemo ga u red

const findOrder = (n, edges) => {
    const graph = Array(n).fill(0).map(() => [])
    const inDegree = Array(n).fill(0)

    for (let i = 0; i < edges.length; i++) {
        graph[edges[i][0]].push(edges[i][1])
        inDegree[edges[i][1]]++
    }

    const queue = []
    const order = Array(n).fill(0)
    let index = 0

    //Incijalno dodavanje u red
    for (let i = 0; i < n; i++)
        if (inDegree[i] == 0)
            queue.push(i)

    while (queue.length) {
        const top = queue.shift()
        // dodaju se cvorovi sa inDegree = 0 u order
        order[index++] = top
        for (let i = 0; i < graph[top].length; i++) {
            const node = graph[top][j]
            inDegree[node]--
            if (inDegree[node] == 0)
                queue.push(node)
        }
    }
    // sadrzi ciklus
    if (index != n) return []
    return order.reverse()
}