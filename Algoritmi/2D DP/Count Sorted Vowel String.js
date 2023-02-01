const countVowelStrings = n => {
    const volwes = ["a", "e", "i", "o", "u"]    

    const dp = {}

    const dfs = (depth, last) => {
        const key = last + "," + depth
        if(depth == n)
            return 1
        
        if(dp[key])
            return dp[key]
            
        let sum = 0

        for(let i = 0; i < 5; i++){
            if(last == "" || last <= volwes[i])
                sum += dfs(depth + 1, volwes[i])
        }
        return dp[key] = sum
    }
    return dfs(0, "")
};
