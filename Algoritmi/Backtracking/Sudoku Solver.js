function getSet(i, j, board){
    const set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]),
          a = 3 * Math.floor(i / 3),
          b = 3 * Math.floor(j / 3)

    for(let x = 0; x < 9; x++){
        set.delete(board[i][x])
        set.delete(board[x][j])
    }

    for(let x = a; x < a + 3; x++)
        for(let y = b; y < b + 3; y++)
            set.delete(board[x][y])
    return set
}

const solveSudoku = board => {
    const arr = []
    let flag = 1

    for(let i = 0; i < 9; i++)
        for(let j = 0; j < 9; j++)
            if(board[i][j] == '.')
                arr.push([i, j])

    const backtrack = index => {
        if(index > arr.length) return
        if(index == arr.length) return flag = 0

        const set = getSet(arr[index][0], arr[index][1], board)
        
        if(set.size == 0) return
       
        for(let number of set){
            if(flag){
                board[arr[index][0]][arr[index][1]] = number
                backtrack(index + 1)
                if(flag)
                    board[arr[index][0]][arr[index][1]] = '.'
            }
        }
    }
    backtrack(0)
}
