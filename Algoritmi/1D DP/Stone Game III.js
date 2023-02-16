// MiniMax
const stoneGameIII = nums => {
    const dp = Array(nums.length).fill(undefined)

    const dfs = (index) => {
        if(index >= nums.length)
            return 0
            
        if(dp[index] != undefined)
            return dp[index]
            
        return dp[index] = Math.max(
            nums[index] - dfs(index + 1),
            nums[index] + (nums[index + 1] || 0) - dfs(index + 2),
            nums[index] + (nums[index + 1] || 0) + (nums[index + 2] || 0) - dfs(index + 3)
        )
    }
    const res = dfs(0)
    return res == 0 ? "Tie" : res > 0 ? "Alice" : "Bob"
};
