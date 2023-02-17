// Levenshtein distance se razlikuje od edit distance po tome sto 
// je cost za zamenu 2 ako su karakteri razlicit odnosno 0 ako su isti

const levenshtein = (string1, string2) => {
    const dp = Array(string1.length).fill(0).map(() => Array(string2.length).fill(-1))

    const dfs = (i, j) => {
        if (i == string1.length)
            return string2.length - j

        if (j == string2.length)
            return string1.length - i

        if (dp[i][j] != -1)
            return dp[i][j]

        if (string1[i] == string2[j])
            return dfs(i + 1, j + 1)

        const cost = string1[i] == string2[j] ? 0 : 2

        return dp[i][j] = Math.min(
            1 + dfs(i, j + 1), // insert
            1 + dfs(i + 1, j), // delete
            cost + dfs(i + 1, j + 1) // substitute //umesto cost za Edit distance ide samo 1
        )
    }
    return dfs(0, 0)
}
