const PredictTheWinner = nums => {
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
};
