const change = (target, nums) => {
    const dp = Array(nums.length + 1).fill(0).map(() => Array(target + 1).fill(-1))
    const dfs = (sum, index) => {
        if(sum > target || index == nums.length)
            return 0
        if(sum == target)
            return 1
        if(dp[index][sum] != -1)
            return dp[index][sum]
        return dp[index][sum] = dfs(sum + nums[index], index) + dfs(sum, index + 1)
    } 
    return dfs(0, 0)
};