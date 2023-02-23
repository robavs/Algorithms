// Bukvalnoooo jedina stvar sto sam incijalno pogresio jeste sto sam stavio da petlja ide od i = index umesto od index + 1 i sto sam stavio continue umesto break
// inace lagan zadatak
const canCross = (stones) => {
    const dp = Array(stones.length).fill(0).map(() => [])

    const dfs = (index, k) => {
        if (index == stones.length - 1)
            return true

        if (dp[index][k] != undefined)
            return dp[index][k]

        let res = false

        for (let i = index + 1; i < stones.length; i++) {
            if (stones[i] > stones[index] + k + 1) break

            if (stones[i] == stones[index] + k - 1)
                res |= dfs(i, k - 1)

            else if (stones[i] == stones[index] + k)
                res |= dfs(i, k)

            else if (stones[i] == stones[index] + k + 1)
                res |= dfs(i, k + 1)
        }
        return dp[index][k] = res
    }
    return Boolean(dfs(0, 0))
};
