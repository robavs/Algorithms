// I ovde postoji greedy nacin
const jump = nums => {
    const dp = Array(nums.length).fill(-1)
    if(nums.length == 1) return 0
    const dfs = (index, value = nums[index]) => {
        if(index >= nums.length)
            return 0

        if(index >= nums.length - 1 || index + value >= nums.length - 1)
            return 1

        if(dp[index] != -1)
            return dp[index]

        let min = Infinity
        for(let i = index + 1; i <= index + value; i++){
            if(i < nums.length)
                min = Math.min(1 + dfs(i), min)
        }
        return dp[index] = min
    }
    return dfs(0)
}
const Jump = nums => {
    const dp = Array(nums.length).fill(Infinity)
    dp[nums.length - 1] = 0

    for(let i = nums.length - 2; i >= 0; i--){
        if(nums[i] + i >= nums.length - 1)
            dp[i] = 1
        else {
            let min = Infinity
            for(let j = 1; j <= nums[i]; j++){
                min = Math.min(min, dp[i + j])
            }
            dp[i] = 1 + min
        }
    }
    return dp[0]
}
