// moze se napisati i kraci algoritam isti kao i za Predict The Winner
// koji je inace generalni algoritam ali ovaj radi jer imamo paran broj elemenata
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
// Ovo je opsti algoritam (MiniMax)
const StoneGame = nums => {
    const dp = Array(nums.length).fill(0).map(() => Array(nums.length).fill(undefined))

    const dfs = (l, r) => {
        if(l == r + 1)
            return 0
        if(dp[l][r] != undefined)
            return dp[l][r]        

        return dp[l][r] = Math.max(
                nums[l] - dfs(l + 1, r),
                nums[r] - dfs(l, r - 1)
            )
    }
    return dfs(0, nums.length - 1) >= 0
}
