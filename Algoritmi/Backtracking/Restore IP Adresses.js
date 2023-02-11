// ovo sam uradio na osnovu palindrome partitioning ali postoji efikasnije resenje 
const restoreIpAddresses = string => {
    const res = []

    const backtrack = (pos, depth, curr) => {
        if (depth == 4 && pos == string.length)
            return res.push(curr)

        for (let i = pos; i < string.length; i++) {
            let str = string.slice(pos, i + 1)
            if (Number(str) > -1 && Number(str) < 256 && !(str[0] == "0" && str.length > 1)) {
                let temp = curr
                if (depth < 3) {
                    curr += str + "."
                }
                else {
                    curr += str
                }
                backtrack(i + 1, depth + 1, curr)
                curr = temp
            }
        }
    }
    backtrack(0, 0, "")
    return res
};
// ovo sam video kao necije resenje i ujedno najefikasniji nacin za resavanje,
// dakle uvek prvo treba pogledati koji je najoptimalniji deo za dfs jer glavnom ce postojati
// vise nacina da se zadatak uradi ali gledamo najefikasniji ovde se to ogleda u tome sto je
// for petlja ide samo od i = 1 do 4 jer tolki substring mozemo da imamo za razliku gde sam
// u gornjem primeru delio string na 4 substringa pa onda ispitivao koje su moguce vrednosti
// a to nije optimalno jer se cekiraju i substrizi koji imaju vecu duzinu od 3
const RestoreIpAddresses = string => {
    const res = []

    const backtrack = (pos, path) => {
        if (pos > string.length || path.length > 4) return
        if (path.length == 4 && pos == string.length) return res.push(path.slice().join(""))
        for (let i = 1; i < 4; i++) {
            let str = string.substring(pos, pos + i)
            if (Number(str) > -1 && Number(str) < 256 && !(str[0] == "0" && str.length > 1)) {
                if (path.length < 3) path.push(str + ".")
                else path.push(str)

                backtrack(pos + i, path)

                path.pop()
            }
        }
    }
    backtrack(0, [])
    return res
};
