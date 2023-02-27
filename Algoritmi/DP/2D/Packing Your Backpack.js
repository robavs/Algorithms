const packBagpack = (scores, weights, capacity) => {
    const dp = Array(scores.length).fill(0).map(() => Array(capacity).fill(-1))
    const dfs = (index, sum) => {
        if(sum > capacity)
           return -Infinity
        if(index == scores.length || sum == capacity)
            return 0
        if(dp[index][sum] != -1)
            return dp[index][sum]
        return dp[index][sum] = Math.max(
          scores[index] + dfs(index + 1, sum + weights[index]),
          dfs(index + 1, sum)
        )
    }
    return dfs(0, 0)
}
