const combinationSum4 = (nums, target) => {
    const dp = new Array(target + 1).fill(Infinity)

    return (function dfs(sum){
        if(sum == 0) return 1
        if(sum < 0) return 0
        if(dp[sum] != Infinity) return dp[sum]
        
        let res = 0
        for(let i = 0; i < nums.length; i++){
            if(sum - nums[i] >= 0)
                res += dfs(sum - nums[i])
        }
        return dp[sum] = res
    })(target)
}