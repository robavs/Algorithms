//Ovaj zadatak nisam umeo da uradim, pa sam video resenje (ali je izuzetno lak)
const longestCommonSubsequence = (text1, text2) => {
    const dp = Array(text1.length + 1).fill(0).map(() => Array(text2.length + 1).fill(-1))

    const dfs = (i, j) => {
        if(i == text1.length || j == text2.length)
            return 0

        if(dp[i][j] != -1)
            return dp[i][j]

        if(text1[i] == text2[j])
            return 1 + dfs(i + 1, j + 1)
        
        return dp[i][j] = Math.max(
            dfs(i + 1, j),
            dfs(i, j + 1)
        )
    }
    return dfs(0, 0)
};
