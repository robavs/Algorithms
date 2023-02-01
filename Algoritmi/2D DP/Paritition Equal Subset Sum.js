const canPartition = nums => {
    const sum = nums.reduce((a, c) => a + c)
    if(sum % 2 == 1)
        return false
    const dp = Array(nums.length).fill(0).map(() => Array(sum / 2).fill(undefined))

    const dfs = (index, currSum) => {
        if(currSum == sum / 2)
            return true

        if(currSum > sum / 2 || index == nums.length)
            return false

        if(dp[index][currSum] != undefined)
            return dp[index][currSum]

        return dp[index][currSum] = dfs(index + 1, currSum + nums[index]) ||
                                    dfs(index + 1, currSum)
    }
    return dfs(0, 0)
}
