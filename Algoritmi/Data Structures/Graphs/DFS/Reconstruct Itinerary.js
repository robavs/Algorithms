const findItinerary = tickets => {
    const graph = {}

    for (let i = 0; i < tickets.length; i++) {
        if (!graph[tickets[i][0]])
            graph[tickets[i][0]] = []
        graph[tickets[i][0]].push(tickets[i][1])
    }

    for (const [key, _] of Object.entries(graph))
        graph[key].sort() // kad sam cuo ovo na videu odmah sam znao kako da ga uradim, sto inace i nije neki hint xD

    const dfs = (node, index, path) => {
        if (index == tickets.length)
            return true

        if (index > tickets.length || !(node in graph))
            return false

        for (let i = 0; i < graph[node].length; i++) {
            if(graph[node][i] == undefined) 
                continue 

            path.push(graph[node][i])

            let temp = graph[node][i]
            graph[node][i] = undefined

            if (dfs(temp, index + 1, path))
                return path

            graph[node][i] = temp
            path.pop()
        }
    }
    return dfs("JFK", 0, ["JFK"])
}
