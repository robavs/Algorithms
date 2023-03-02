// Uradio sam ovaj zadatak ali sam koristio pored ovog i lokalno za svaki dfs visited set
// to povecava vreme zbog dodatnih operacija dodavanja i trazenja u setu
// tako da to uopste nije potrebno nego je dovoljan samo globalni dp (visited set)
// koji radi na onom principu bojenja, incijalno su svi cvorovi neobojeni
// zatim kako idemo kroz dfs bojimo svaki cvor sto znaci da on ucestvuje u ciklusu
// ako vrati true naso je ciklus, a ako ne vrati mi smo zapamtili cvorove koji kasnije
// u duploj for petlji ne treba da budu pretrazivani jer NE OBRAZUJU ciklus

const containsCycle = grid => {
    const m = grid.length, n = grid[0].length
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const dp = Array(m).fill(0).map(() => Array(n).fill(0))

    const isValid = (i, j) => i >= 0 && i < m && j >= 0 && j < n

    const dfs = (i, j, i1, j1, initial) => {
        if(dp[i][j] != 0)
            return true

        dp[i][j] = 1
        
        for (let x = 0; x < 4; x++) {
            const a = i + moves[x][0]
            const b = j + moves[x][1]
            if (isValid(a, b) && grid[a][b] == initial && !(a == i1 && b == j1)) {
                if (dfs(a, b, i, j, initial))
                    return true
            }
        }
        return false
    }

    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if(dp[i][j] == 0) {
                if (dfs(i, j, -1, -1, grid[i][j]))
                    return true
            }
        }
    }
        
    return false
};
