const countVowelPermutation = n => {
    const memo = {}
    const obj = {
        "a" : ["e"],
        "e" : ["a", "i"],
        "i" : ["a", "e", "o", "u"],
        "o" : ["i", "u"],
        "u" : ["a"]
    }
    const dfs = (index, char) => {
        const key = char + "," + index
        if(index == n - 1) return 1

        if(memo[key]) return memo[key]
            
        let sum = 0
        for(const vowel of obj[char])
            sum += dfs(index + 1, vowel)
        return memo[key] = sum % (10 ** 9 + 7)
    }  
    let sum = 0
    for(let char of ["a", "e", "i","o","u"])
        sum += dfs(0, char) 
    return sum % (10 ** 9 + 7)
};