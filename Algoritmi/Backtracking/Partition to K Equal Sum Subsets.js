// Ovo je isti nacin kao Matchsticks to Square i resenje prolazi ali za 5% Time i 85% memory
 // lagano moze da se desi da ovaj kod ni ne prodje
const canPartitionKSubsets = (nums, k) => {
    const sum = nums.reduce((a, c) => a + c) / k
    if (sum != ~~sum) return false
    let res = false
    nums.sort((a, b) => b - a)
    const path = Array(k).fill(0)

    const backtrack = (index) => {
        if(res) return
        if (index == nums.length) {
            if(path.every(e => e == sum)) res = true
            return
        }
        for (let i = 0; i < k; i++) {
            if (path[i] + nums[index] <= sum){
                path[i] += nums[index]
                backtrack(index + 1)
                path[i] -= nums[index]
            }
        }
    }
    backtrack(0)
    return res
};

// Neetcode nacin, efikasnije of mog u pogledu vremena za 20 posto ali idalje moze dosta brze
// kada se doda da se niz soritra u opadajucem redosledu dobija se resenje koje je 40 bolje
const canPartitionKSubsets = (nums, k) => {
    const sum = nums.reduce((a, c) => a + c) / k
    let res = false
    const used = Array(nums.length).fill(0)
    nums.sort((a, b) => b - a)
    const backtrack = (i, j, currSum) => {
        if(res) return
        if(j == k) return res = true
        if(currSum == sum) backtrack(0, j + 1, 0) // ovde je vazno da se i pointer vrati na nulu zbog vrednosti koje nisu ukljucivao u datu sumu

        for(let a = i; a < nums.length; a++){
            if(used[a] || currSum + nums[a] > sum)
                continue
            used[a] = 1
            backtrack(a + 1, j, currSum + nums[a])
            used[a] = 0
        }
    }
    backtrack(0, 0, 0)
    return res
};
// Ovo resenje je ipak dosta bolje od oba prethodna
// idalje ne mogu da vidim zasto prvo resenje iako je skoro identicno ovom, radi dosta sporije
const canPartitionKSubsets = (nums, k) => {
    const total = nums.reduce((a, c) => a + c)
    if (total % k) return false

    const sum = total / k

    const path = new Array(k).fill(0)

    function subsetSum(index) {
      if (path.every((e) => e == sum)) 
        return true

      if (index < 0) 
        return false

      for (let i = 0; i < k; i++) {
        if (path[i] + nums[index] <= sum) {
            path[i] += nums[index]
            if (subsetSum(index - 1)) return true
            path[i] -= nums[index]
            if (path[i] === 0) break // bez ove linije vraca TLE iako ne znam cemu sluzi :(
        }
      }
      return false;
    }
  return subsetSum(nums.length - 1);
}
