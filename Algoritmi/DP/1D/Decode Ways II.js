// zadatak sam relativno brzo uradio ali sa time and memory od 11 % i posle sam samo video da su optimizovali pozive dfs 
// tako da se ne prolazi kroz petlje vec se pomnozi odgvarajucom konstantom u zavisnosti od prethodnog/sledeceg broja

const numDecodings = s => {
    const moduo = 10 ** 9 + 7
    const dp = Array(s.length).fill(null)

    const dfs = (index) => {
        if(index > s.length) 
            return 0
        
        if (index == s.length)
            return 1

        if (dp[index] != null)
            return dp[index]

        let res = 0

        if (s[index] == "*") {
            res += 9 * dfs(index + 1)

            if (s[index + 1] == "*")
                res += 15 * dfs(index + 2)

            else if (parseInt(s[index + 1]) <= 6)
                res += 2 * dfs(index + 2)

            else res += dfs(index + 2)
        }

        else {
            if (s[index] != "0") {
                res += dfs(index + 1)
                if (s[index + 1] == "*"){
                    if(s[index] == 1)
                        res += 9 * dfs(index + 2)
                    else if (s[index] == 2)
                        res += 6 * dfs(index + 2)
                }
            }

            if ((s[index] == 1 && parseInt(s[index + 1]) <= 9) || (s[index] == 2 && parseInt(s[index + 1]) < 7))
                res += dfs(index + 2)
        }

        return dp[index] = res % moduo
    }
    return dfs(0)
}
