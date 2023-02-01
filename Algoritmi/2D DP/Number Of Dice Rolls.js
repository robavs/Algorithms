const numRollsToTarget = (n, k, target) => {
    if(n * k < target) return 0

    const dp = Array(n + 1).fill(undefined).map(() => Array(target).fill(undefined))
    const nums = Array(k).fill(0).map((_, i) => i + 1)
    
    for(let num of nums)
        dp[1][num] = 1

    return (function  dfs(target, depth){
        if(target == 0 && depth == 0) 
            return 1
        if(target <= 0 || depth <= 0)
            return 0
        if(dp[depth][target] != undefined)
            return dp[depth][target]

        let sum = 0
        for(let i = 0; i < nums.length; i++)
            sum += dfs(target - nums[i], depth - 1)

        return dp[depth][target] = sum  % (10 ** 9 + 7)
    })(target, n)
}