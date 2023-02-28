const wordBreak = (s, wordDict) => {
    wordDict = new Set(wordDict)
    const res = []

    const dfs = (index, path) => {
        if (index == s.length) 
            return res.push(path.join(" "))
            
        for (let i = index; i < s.length; i++) {
            let string = s.slice(index, i + 1)
            if (wordDict.has(string)) {
                path.push(string)
                dfs(i + 1, path)
                path.pop()
            }
        }
        return res
    }
    return dfs(0, [])
};
