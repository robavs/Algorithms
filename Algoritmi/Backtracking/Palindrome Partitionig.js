// Zadatak je lak ali sam morao da vidim prvo resenje jer sam mislio da je mnogo tezak
const partition = string => {
    const res = []

    const backtrack = (pos, path) => {
        if (pos == string.length) 
            return res.push(path.slice())

        for (let i = pos; i < string.length; i++) {
            let str = string.slice(pos, i + 1)
            if (isPalindrome(str)) {
                path.push(str)
                backtrack(i + 1, path)
                path.pop()
            }
        }
    }
    backtrack(0, [])
    return res
}

function isPalindrome(string) {
    return string == string.split("").reverse().join("")
}
