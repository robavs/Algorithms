// Umesto grafa kao objekat setova efikasnije je da se stavi matrica
const maximalNetworkRank = (n, roads) => {
    if(!roads.length)
        return 0
        
    const rank = Array(n).fill(0)
    const graph = {}
    let max = 0

    for(let i = 0; i < roads.length; i++){
        if(!graph[roads[i][0]])
            graph[roads[i][0]] = new Set()
        
        if(!graph[roads[i][1]])
            graph[roads[i][1]] = new Set()
        
        graph[roads[i][0]].add(roads[i][1])
        graph[roads[i][1]].add(roads[i][0])

        rank[roads[i][0]]++
        rank[roads[i][1]]++
    }
    
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let curr = rank[i] + rank[j]
            if(graph[i] && graph[i].has(j))
                curr--
            max = Math.max(curr, max)
        }
    }
    return max
};
