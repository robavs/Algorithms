const maxSumDivThree = nums => {
    const dp = Array(nums.length).fill(0).map(() => Array(3).fill(-1))

    const dfs = (index, sum) => {
        if(index == nums.length)
            return sum == 0 ? 0 : -Infinity

        if(dp[index][sum] != -1)
            return dp[index][sum]
        
        return dp[index][sum % 3] = Math.max(
            nums[index] + dfs(index + 1, (sum + nums[index]) % 3),
            dfs(index + 1, sum % 3)
        )
    }    
    return dfs(0, 0)
};
