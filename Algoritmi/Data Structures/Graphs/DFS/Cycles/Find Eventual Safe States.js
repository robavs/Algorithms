// Za ovaj zadatak sam dobijao TLE, ali ova fora je bas dobra
// prvo su svi cvorovi incijalizovani sa 0 sto znaci da nisu poseceni
// nakon toga cvoru dajemo vrednost 1 sto je unsafe i znaci da ima ciklus
// ako nema ciklus postavljamo da je cvor safe
// i onda posle ako naidjemo na cvor da je safe samo ga dodamo u resenje
const eventualSafeNodes = graph => {
    const res = []
    const color = Array(graph.length).fill(0)

    const dfs = node => {
        color[node] = 1
        for (let i = 0; i < graph[node].length; i++) {
            if (color[graph[node][i]] == 0 && dfs(graph[node][i]) || color[graph[node][i]] == 1)
                return true
        }
        color[node] = 2
        return false
    }
    for (let i = 0; i < graph.length; i++) {
        if (color[i] == 2 || !dfs(i))
            res.push(i)
    }
    return res
};
