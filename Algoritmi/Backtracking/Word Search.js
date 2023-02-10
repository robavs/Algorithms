const exist = (board, word) => {
    const coords = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const isValid = (i, j) => !(i >= board.length || j >= board[0].length || i < 0 || j < 0)
    const matrix = Array(board.length).fill(0).map(() => Array(board[0].length).fill(0))
    const obj = {res:false}
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] == word[0]){
                matrix[i][j] = 1
                bfs(board, word, i, j, 0, 0, isValid, coords, matrix, obj)
                matrix[i][j] = 0
                if(obj.result) return true
            }
        }
    }
    return false
};

const bfs = (board, word, i, j, index, count, isValid, coords, matrix, obj = {res:false}) => {
    if(board[i][j] != word[index])
        return
    if(board[i][j] == word[index])
        count++
    if(count == word.length)
        return obj.result = true
        
    for(let c = 0; c < 4; c++){
        const a = coords[c][0]
        const b = coords[c][1]
        if(isValid(i + a, j + b) && !matrix[i + a][j + b]){
            matrix[i + a][j + b] = 1
            bfs(board, word, i + a, j + b, index + 1, count, isValid, coords, matrix, obj)
            matrix[i + a][j + b] = 0
        }
    }
}
