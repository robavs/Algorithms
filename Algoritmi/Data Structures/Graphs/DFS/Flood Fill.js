const floodFill = (image, sr, sc, color) => {    
    const visited = Array(image.length).fill(0).map(() => Array(image[0].length).fill(0))
    const initial = image[sr][sc]
    const isValid = (i, j) => i >= 0 && i < image.length && j >= 0 && j < image[0].length
    const dfs = (i, j) => {
        if(isValid(i, j) && !visited[i][j] && image[i][j] == initial){
            visited[i][j] = 1
            image[i][j] = color
            dfs(i + 1, j)
            dfs(i - 1, j)
            dfs(i, j + 1)
            dfs(i, j - 1)
        }
    } 
    dfs(sr, sc)
    return image
};
