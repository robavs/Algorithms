const minDistance = (word1, word2) => {
    const dp = Array(word1.length)
              .fill(0).map(() => Array(word2.length).fill(-1))

    const dfs = (i, j) => {
        if(j == word2.length)
            return word1.length - i
        
        if(i == word1.length)
            return word2.length - j

        if(dp[i][j] != -1)
            return dp[i][j]
            
        if(word1[i] == word2[j])
            return dp[i][j] = dfs(i + 1, j + 1)
        
        return dp[i][j] = 1 + Math.min(
            dfs(i + 1, j), 
            dfs(i, j + 1), 
            dfs(i + 1, j + 1)
        )
    }
    return dfs(0, 0, word1, word2)
};