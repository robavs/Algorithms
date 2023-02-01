//ovaj zadatak takodje prvi put nisam umeo da uradim jer tad nisam znao 2D DP ali je izuzetno lak
const findTargetSumWays = (nums, target) => {
    const memo = {}
    const dfs = (index, sum) => {
        const key = index + "," + sum
        if(key in memo)
            return memo[key]
        if(index == nums.length && sum == target)
            return 1
        if(index >= nums.length)
            return 0
        return memo[key] = dfs(index + 1, sum + nums[index]) + dfs(index + 1, sum - nums[index])
    }
    return dfs(0, 0)
};
