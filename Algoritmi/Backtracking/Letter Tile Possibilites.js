const numTilePossibilities = tiles => {
    const used = Array(tiles.length).fill(0)
    const set = new Set()

    const backtrack = (path = "") => {
        if(path.length) set.add(path)
        for(let i = 0; i < tiles.length; i++){
            if(!used[i]){
                used[i] = 1
                backtrack(path + tiles[i])
                used[i] = 0
            }
        }
    }
    backtrack([])
    return set.size
}; 
