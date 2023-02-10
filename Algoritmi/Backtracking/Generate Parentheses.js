const generateParenthesis = n => {
    const stack = []
    const res = []

    const dfs = (stack, string, index, open) => {
        if(index == 2 * n)
            return res.push(string)
            
        if(open < n){
            open++
            stack.push("(")
            dfs(stack, string + "(", index + 1, open)
            open--
            stack.pop()
        }
        if(stack.length > 0){
            stack.pop()
            dfs(stack, string + ")", index + 1, open)
            stack.push("(")
        }
        return res
    }
    return dfs(stack, "", 0, 0)
};
