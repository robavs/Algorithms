const stoneGame = piles => {
    const n = piles.length
    const dp = Array(n).fill(0).map(() => Array(n).fill(undefined))

    const dfs = (depth, l, r, i) => {
        if(depth == n)
            return 0
        
        if(dp[depth][i] != undefined)
            return dp[depth][i]
        
        let res = 0

        if(depth % 2 == 0)
            res = Math.max(
                piles[l] + dfs(depth + 1, l + 1, r, l),
                piles[r] + dfs(depth + 1, l, r - 1, r)
            )
        else 
            res = Math.max(
                -piles[l] + dfs(depth + 1, l + 1, r, l),
                -piles[r] + dfs(depth + 1, l, r - 1, r)
            )
        return dp[depth][i] = res
    }
    return dfs(0, 0, n - 1, 0) > 0
};