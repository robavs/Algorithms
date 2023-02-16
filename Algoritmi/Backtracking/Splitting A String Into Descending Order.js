// svi ovi zadaci se rade na istu foru kao i palindrome partitioning
const splitString = string => {
    let final = false

    const backtrack = (pos, prev, depth) => {
        if (pos == string.length) {
            if (depth >= 2)
                final = true
            return
        }
        for (let i = pos; i < string.length; i++) {
            let str = string.slice(pos, i + 1)
            let sum = parseInt(str)

            if (prev == -1 || prev - sum == 1)
                backtrack(i + 1, sum, depth + 1)
        }
    }
    backtrack(0, -1, 0)
    return final
}
