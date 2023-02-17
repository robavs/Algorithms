const wordBreak = (target, words) => {
    const final = []
    const set = new Set(words)

    const dfs = (pos, substring, res) => {
        if (res == target)
            return true

        if (pos >= target.length)
            return false

        for (let i = 0; i < target.length - res.length; i++) {
            let word = target.slice(pos, i + pos + 1)
            let par1 = substring.length == 0 ? word : substring + " " + word
            if (set.has(word)) {
                if (dfs(pos + i + 1, par1, res + word))
                    final.push(par1)
            }
        }
    }
    dfs(0, "", "")
    return final
};
