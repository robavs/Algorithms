// napisao sam bfs i to uzorkuje tle i slucajno sam video da neko primenio dijkstru i dodao sam samo uslov za dijkstru :(((((((
const findCheapestPrice = (n, flights, src, dst, k) => {
    const graph = Array(n).fill(0).map(() => [])
    for (let i = 0; i < flights.length; i++) 
        graph[flights[i][0]].push([flights[i][1], flights[i][2]])
 
    const queue = [[src, 0]] // node & price
    let res = Infinity
    let stop = -1

    const priceArray = Array(n).fill(Infinity)
    priceArray[src] = 0

    while (queue.length) {
        if (stop > k) break

        const size = queue.length        

        for (let i = 0; i < size; i++) {
            const [node, price] = queue.shift()

            if (node == dst && stop <= k) {
                if (price < res)
                    res = price
                continue
            }
            for (let j = 0; j < graph[node].length; j++) {
                const cost = graph[node][j][1]

                if (priceArray[graph[node][j][0]] > cost + price) {
                    queue.push([graph[node][j][0], price + cost])
                    priceArray[graph[node][j][0]] = cost + price
                }
            }
        }
        stop++
    }
    return res != Infinity ? res : -1
};
