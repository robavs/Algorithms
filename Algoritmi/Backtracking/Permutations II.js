// Nisam umeo da uradim tako da je ovo resenje sa interneta i vrlo je zanimljiva ideja
const permuteUnique = (nums) => {
    const matrix = []
    const hash = {}

    for (let i = 0; i < nums.length; i++)
        if (!hash[nums[i]])
            hash[nums[i]] = 1
        else hash[nums[i]]++

    const backtrack = (perm) => {
        if (perm.length == nums.length)
            return matrix.push(perm.slice())
        for (let [key, value] of Object.entries(hash)) {
            if (value > 0) {
                perm.push(Number(key))
                hash[key]--
                backtrack(perm)
                hash[key]++
                perm.pop()
            }
        }
    }
    backtrack([])
    return matrix
}
