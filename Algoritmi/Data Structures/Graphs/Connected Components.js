// codewars
function countDistricts(city) {
    let comp = 0
    const visited = new Set()

    const dfs = (node) => {
        visited.add(node)
        for (let i = 0; i < city[node].length; i++) {
            if (!visited.has(city[node][i]))
                dfs(city[node][i])
        }
    }
    const cities = Object.keys(city)

    for (let i = 0; i < cities.length; i++) {
        if (!visited.has(cities[i])) {
            comp++
            dfs(cities[i])
        }
    }
    return comp
}
