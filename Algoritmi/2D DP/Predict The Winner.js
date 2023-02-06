const PredictTheWinner = nums => {
    const dp = Array(nums.length).fill(0).map(() => Array(nums.length).fill(undefined))

    const dfs = (l, r, move) => {
        if(l == r + 1)
            return 0
        if(dp[l][r] != undefined)
            return dp[l][r]
        let res
        if(move == 0){
            res = Math.max(
                nums[l] + dfs(l + 1, r, 1),
                nums[r] + dfs(l, r - 1, 1)
            )
        }
        else {
            res = Math.min(
                -nums[l] + dfs(l + 1, r, 0),
                -nums[r] + dfs(l, r - 1, 0)
            )
        }
        return dp[l][r] = res
    }
    return dfs(0, nums.length - 1, 0) >= 0
};
