const letterCombinations = digits => {
    if(!digits.length)
        return []
    const hash = {
        '2' : ["a", "b", "c"],
        '3' : ["d", "e", "f"],
        '4' : ["g", "h", "i"],
        '5' : ["j", "k", "l"],
        '6' : ["m", "n", "o"],
        '7' : ["p", "q", "r", "s"],
        '8' : ["t", "u", "v"],
        '9' : ["w", "x", "y", "z"]
    }
    const res = []
    const backtrack = (index = 0, string = "") => {
        if(index == digits.length )
            return res.push(string.slice())
        for(let char of hash[digits[index]])
            backtrack(index + 1, string + char)
        return res
    } 
    return backtrack()
};
