// Kod ovih zadatka je postojala jaka fora koju nisam znao a ona je da treba da cuvas u setovima
// kolone, dijagonale i anti-dijagonale, inicijalno sam odradio i N Qeens i N Qeens II sa idejom
// da napravim 2d tabelu koja sadrzi koja su polja dozvoljena a da za dozovljena polja radim
// funkciju koja mi updajtuje niz sto usporava resenje i ovo je zaista bolje

const solveNQueens = n => {
    const col = new Set()
    const posDiag = new Set() // r + c
    const negDiag = new Set() // r - c

    const board = Array(n).fill(0).map(() => Array(n).fill("."))
    const final = []

    const backtrack = r => {
        if (r == n) {
            const copy = []
            for (let i = 0; i < n; i++)
                copy.push(board[i].slice().join(""))
            return final.push(copy)
        }
        for (let c = 0; c < n; c++) {
            if (!col.has(c) && !posDiag.has(r + c) && !negDiag.has(r - c)) {
                col.add(c)
                posDiag.add(r + c)
                negDiag.add(r - c)
                board[r][c] = "Q"

                backtrack(r + 1)

                board[r][c] = "."

                col.delete(c)
                posDiag.delete(r + c)
                negDiag.delete(r - c)
            }
        }
    }
    backtrack(0)
    return final
}

const totalNQueens = n => {
    const col = new Set()
    const posDiag = new Set() // r + c
    const negDiag = new Set() // r - c

    let final = 0

    const backtrack = r => {
        if (r == n) 
            return final++
        for (let c = 0; c < n; c++) {
            if (!col.has(c) && !posDiag.has(r + c) && !negDiag.has(r - c)) {
                col.add(c)
                posDiag.add(r + c)
                negDiag.add(r - c)

                backtrack(r + 1)

                col.delete(c)
                posDiag.delete(r + c)
                negDiag.delete(r - c)
            }
        }
    }
    backtrack(0)
    return final
}
