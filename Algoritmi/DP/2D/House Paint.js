const minCost = cost => {
    const dp = Array(cost.length).fill(0).map(() => Array(3).fill(-1))
    
    const dfs = (index, color) => {
        if(index == cost.length) return 0
   
        if(dp[index][color] != -1) return dp[index][color]
   
        let res = 0
    
        if(color == 0) 
            res += cost[index][0] + Math.min(dfs(index + 1, 1), dfs(index + 1, 2))
        
        else if(color == 1) 
            res += cost[index][1] + Math.min(dfs(index + 1, 0), dfs(index + 1, 2))
        
        else
            res += cost[index][2] + Math.min(dfs(index + 1, 0), dfs(index + 1, 1))
        
        return dp[index][color] = res
    }
    const res = Math.min(dfs(0, 0), dfs(0, 1), dfs(0, 2))
    return res
}  
