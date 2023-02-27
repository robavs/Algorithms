//ovo je moj kod mada sam ideju dobio kad sam video snimak gde su rekli da posmatras kao graf
const lengthOfLIS = nums => {
    const dp = Array(nums.length).fill(-1)

    const dfs = index => {
        if(dp[index] != -1)
            return dp[index]

        let max = 1

        for(let i = index + 1; i < nums.length; i++)
            if(nums[i] > nums[index])
                max = Math.max(max, 1 + dfs(i))

        return dp[index] = max
    }
    let res = 0
    for(let i = 0; i < nums.length; i++)
        res = Math.max(res, dfs(i))
    return res
};

// ovaj kod radi malo bolje jer je na foru bottom up jer gleda kolika je duzina najduze sekvence do tog indexa
//dok sam ja radio od odredjenog indexa do kraja niza
function dfs(nums, idx, memo){
    if(memo[idx] != null)
        return memo[idx]
    let max = 1
    for(let i = 0; i < idx; i++)
        if(nums[i] < nums[idx])
            max = Math.max(max, 1 + dfs(nums, i, memo))
    return memo[idx] = max
}
const lengthLIS = function(nums) {
    const memo = Array(nums.length)
    
    let res = 0
    for(let i = 0; i < nums.length; i++)
        res = Math.max(res, dfs(nums, i, memo))

    return res
};
