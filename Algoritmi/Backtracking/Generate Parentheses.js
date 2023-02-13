function generateParenthesis(n) {
    const res = []
    const dfs = (count, path, open, closed) => {
        if (count == 2 * n) 
            return res.push(path)
        if (open < n)
            dfs(count + 1, path + "(", open + 1, closed)
        if (open > closed)
            dfs(count + 1, path + ")", open, closed + 1)
    }
    dfs(0, "", 0, 0)
    return res
};
