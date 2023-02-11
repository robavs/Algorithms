// Glavna fora je da se niz sortira u opadajucem redosledu, ja sam sortirao u rastucem i to je uzrokovalo TLE
// jer ukoliko se u nizu nadje neka vrednost koja je veca od moguce strnaice onda ce znati da tu prekine dalje procesiranje
const makesquare = nums => {
    let path = Array(4).fill(0)
    let sum = nums.reduce((a, c) => a + c) / 4
    if(sum != ~~sum) return false
    let res = false
    nums.sort((a, b) => b - a)

    const backtrack = (index) => {
        if(res) return
        if(index == nums.length){
            if(path.every(e => e == sum))
                res = true
            return
        }
        for(let i = 0; i < 4; i++){
            if(path[i] + nums[index] <= sum){
                path[i] += nums[index]
                backtrack(index + 1)
                path[i] -= nums[index]
            }
        }
    }
    backtrack(0)
    return res
};
