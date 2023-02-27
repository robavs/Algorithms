const wordBreak = (target, words) => {
    const dp = Array(target.length).fill(-1)
    const set = new Set(words)

    const dfs = (pos, path) => {
        if (path == target)
            return true

        if (pos >= target.length)
            return false

        if (dp[pos] != -1) 
            return dp[pos]

        for (let i = 0; i < target.length - path.length; i++) {
            let substring = target.slice(pos, pos + i + 1)
            
            if (set.has(substring)) 
                if (dfs(pos + i + 1, path + substring))
                    return dp[pos] = true
        }
        return dp[pos] = false
    }
    return dfs(0, "")
};
