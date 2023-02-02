// Postoji i greedy koji radi u O(n)
const canJump = nums => {
    const dp = Array(nums.length).fill(-1)

    const dfs = (index, value = nums[index]) => {
        if(index > nums.length) 
            return 0
        
        if(value + index >= nums.length - 1 || value >= nums.length - 1)
            return 1
        
        if(value == 0 && value != nums[nums.length - 1])
            return 0

        if(dp[index] != -1)
            return dp[index]

        let res = 0
        for(let i = index + value; i >= index + 1; i--)
            res += dfs(i)

        return dp[index] = res
    }
    return dfs(0)
}
