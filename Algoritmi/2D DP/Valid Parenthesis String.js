const checkValidString = s => {
    const dp = {}
    const dfs = (index, open) => {
        if(open > s.length - index || open < 0)
            return false

        const key = index + "," + open

        if(index == s.length)
            return open == 0

        if(key in dp)
            return dp[key]

        if(s[index] == "(")
            return dp[key] = dfs(index + 1, open + 1)

        if(s[index] == ")")
            return dp[key] = dfs(index + 1, open - 1)
        
        if(s[index] == "*"){
            return dp[key] = dfs(index + 1, open + 1) || dfs(index + 1, open) || dfs(index + 1, open - 1)
        }
    }
    return dfs(0, 0)
};
