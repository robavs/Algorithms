// prvobitno nisamumeo da uradim ove zadatke pa sam ih gledao sa interneta
// KOMBINACIJE
const combinationSum = (arr, sum) => {
    const matrix = []
    dfs(arr, sum, 0, 0, matrix, [])
    return matrix
}
const dfs = (arr, sum, value, index, matrix, candidates) => {
    if(value == sum)
        return matrix.push([...candidates])

    if(value > sum || index >= arr.length)
        return
    candidates.push(arr[index])
    dfs(arr, sum, value + arr[index], index, matrix, candidates)
    candidates.pop()
    dfs(arr, sum, value, index + 1, matrix, candidates)
}

// PERMUTACIJE
const permute = (nums) => {
    const matrix = []
    const visited = []
    backtrack(matrix, visited, nums)
    return matrix
}

//backtracking je zapravo dfs samo sto ckoristimo current path da znamo sta smo koji je trenutni put i da ne bi uzimali iste brojeve
const backtrack = (matrix, visited, nums, arr = []) => {
    if(arr.length == nums.length)
        matrix.push([...arr])
    else {
        for(let i = 0; i < nums.length; i++){
            if(!visited[i]){
                visited[i] = true
                backtrack(matrix, visited, nums, [...arr, nums[i]])
                visited[i] = false
            }
        }
    }    
}

// SUBSETS
const subsets = nums => {
    const matrix = []
    dfs(matrix, nums, [], 0)
    return matrix
}
const dfs = (matrix, nums, path, index) => {
    if(index == nums.length){
        matrix.push(path)
        return
    }
    dfs(matrix, nums, [...path, nums[index]], index + 1)
    dfs(matrix, nums, path, index + 1)
}
