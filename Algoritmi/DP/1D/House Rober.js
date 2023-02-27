const rob = nums => {
    const dp = Array(nums.length).fill(-1)
    
    const dfs = index => {
        if(index >= nums.length) 
            return 0

        if(dp[index] != -1) 
            return dp[index]

        return dp[index] = Math.max(
            nums[index] + dfs(index + 2),
            dfs(index + 1)
        )
    }
    return dfs(0)
}
const Rob = nums => {
    if(nums.length == 1)
        return nums[0]
    for(let i = 2; i < nums.length; i++)
        nums[i] += Math.max(nums[i-2], nums[i-3] || 0)
    return Math.max(nums[nums.length - 1], nums[nums.length - 2])
};